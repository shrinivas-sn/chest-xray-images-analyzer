import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";

const fileInput = document.getElementById("fileInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultText = document.getElementById("resultText");
const labelsContainer = document.getElementById("labelsContainer");
const resultImage = document.getElementById("resultImage");
const heatmapsContainer = document.getElementById("heatmapsContainer");

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

    // Set a threshold for detection. 0.10 means 10%
    const DETECTION_THRESHOLD = 0.10; 

    // Reset UI
    resultText.textContent = "Analyzing... This might take a few moments.";
    labelsContainer.innerHTML = "";
    heatmapsContainer.innerHTML = ""; // Clear old heatmaps
    resultImage.style.display = "none";
    resultImage.src = "";

    try {
        const client = await Client.connect("shrinusn77/chest-xray-analyzer-using-ai");
        const result = await client.predict("/predict", {
				Radiograph: selectedFile,
		});

        // --- Display Text Description (from index 0) ---
        resultText.textContent = result.data[0];

        // --- Display Labels (from index 1) ---
        const labelsData = result.data[1];
        if (labelsData && labelsData.confidences) {
            labelsData.confidences.forEach(item => {
                const p = document.createElement("p");
                p.className = "label-row";
                p.innerHTML = `
                    <span>${item.label}</span>
                    <span>${(item.confidence * 100).toFixed(0)}%</span>
                `;
                labelsContainer.appendChild(p);

                // --- NEW LOGIC: Check for Pneumonia ---
                if (item.label === 'Pneumonia' && item.confidence > DETECTION_THRESHOLD) {
                    const heatmapImage = result.data[3]; // Get Pneumonia heatmap
                    if (heatmapImage && heatmapImage.url) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'heatmap-wrapper';
                        wrapper.innerHTML = `
                            <h4>Pneumonia Heatmap:</h4>
                            <img src="${heatmapImage.url}" alt="Pneumonia Heatmap" />
                        `;
                        heatmapsContainer.appendChild(wrapper);
                    }
                }

                // --- NEW LOGIC: Check for Pneumothorax ---
                if (item.label === 'Pneumothorax' && item.confidence > DETECTION_THRESHOLD) {
                    const heatmapImage = result.data[4]; // Get Pneumothorax heatmap
                    if (heatmapImage && heatmapImage.url) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'heatmap-wrapper';
                        wrapper.innerHTML = `
                            <h4>Pneumothorax Heatmap:</h4>
                            <img src="${heatmapImage.url}" alt="Pneumothorax Heatmap" />
                        `;
                        heatmapsContainer.appendChild(wrapper);
                    }
                }
            });
        }

        // --- Display Main Colored Image (from index 2) ---
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
