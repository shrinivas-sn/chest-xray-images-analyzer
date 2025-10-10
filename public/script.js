import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";

const fileInput = document.getElementById("fileInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultText = document.getElementById("resultText");
const labelsContainer = document.getElementById("labelsContainer");
const resultImage = document.getElementById("resultImage");

let selectedFile = null;

// Handle file selection
fileInput.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
});

// Analyze button click
analyzeBtn.addEventListener("click", async () => {
    if (!selectedFile) {
        alert("Please select an X-ray image first!");
        return;
    }

    // Reset UI
    resultText.textContent = "Analyzing... This might take a few moments.";
    labelsContainer.innerHTML = "";
    resultImage.style.display = "none";
    resultImage.src = "";

    try {
        const client = await Client.connect("shrinusn77/chest-xray-analyzer-using-ai");
        const result = await client.predict("/predict", {
				Radiograph: selectedFile,
		});

        // --- Display Text Description (from index 0) ---
        resultText.textContent = result.data[0];

        // --- Display Labels like Pneumonia (from index 1) ---
        const labelsData = result.data[1];
        if (labelsData && labelsData.confidences) {
            labelsData.confidences.forEach(item => {
                const p = document.createElement("p");
                p.className = "label-row"; // Add class for styling

                const labelName = document.createElement("span");
                labelName.textContent = item.label;

                const labelValue = document.createElement("span");
                labelValue.textContent = `${(item.confidence * 100).toFixed(0)}%`;

                p.appendChild(labelName);
                p.appendChild(labelValue);
                labelsContainer.appendChild(p);
            });
        }

        // --- Display Colored Image (from index 2) ---
        const finalImage = result.data[2];
        if (finalImage && finalImage.url) {
            resultImage.src = finalImage.url;
            resultImage.style.display = "block";
        }

    } catch (err) {
        console.error("Error during analysis:", err);
        resultText.textContent = "An error occurred. Please check the console.";
    }
});