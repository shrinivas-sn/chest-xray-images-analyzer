🩺 Chest X-Ray Analyzer using Web App

### 📖 Overview

This project is a simple and interactive **A Machine learning integrated web application** that analyzes **chest X-ray images** to help visualize and understand possible lung conditions such as **Pneumonia** and **Pneumothorax**.
It also performs **UNet-based segmentation** to highlight the **heart**, **left lung**, and **right lung** using distinct colors for better medical visualization.

> ⚠️ *This project is created purely for educational and research purposes. It is **not intended for clinical diagnosis or medical decision-making.***

---

## 🧠 What the Application Does

1. The user opens the web application from any device.
2. The user uploads a **chest X-ray image** (JPG or PNG).
3. The application sends the image securely to a **pretrained AI model** hosted on **Hugging Face Spaces**.
4. The model analyzes the image and returns:

   * **Patient’s estimated age**
   * **Predicted gender**
   * **Probability (percentage) of Pneumonia**
   * **Probability (percentage) of Pneumothorax**
   * **UNet segmentation overlay** showing the lungs and heart in color
5. The app then displays the results neatly on the screen.

---

## ⚙️ How It Works (Simplified)

1. **Frontend (Web App):**
   A lightweight interface built using **HTML**, **CSS**, and **JavaScript** allows users to upload X-ray images and view analysis results in real time.

2. **Backend (AI Model):**
   The web app connects to a **Hugging Face Space** that contains a **pretrained deep learning model** capable of detecting Pneumonia and Pneumothorax, and performing segmentation.

3. **Deployment:**
   The complete web application is **deployed using Firebase** for hosting, with **Node.js** managing backend communication between the web app and the Hugging Face Space.

---

## 🪜 Step-by-Step Process (Beginner Friendly)

1. **Open the Web App** → Available online through a hosted link.
2. **Upload an X-Ray Image** → Choose the chest X-ray file to analyze.
3. **Click “Analyze”** → The app sends the image to the AI model hosted on Hugging Face.
4. **Model Processing** → The model runs image analysis and segmentation in the background.
5. **View Results** → The app displays:

   * Age & gender prediction
   * Disease probabilities (in %)
   * Segmentation image showing lungs & heart regions with colors

Everything happens automatically — the user only needs to upload and click “Analyze.”

---

## 🧩 Key Features

* 🔹 Detects **Pneumonia** and **Pneumothorax** with confidence percentages
* 🔹 Provides **Age** and **Gender** estimation from X-ray image features
* 🔹 Performs **UNet-based segmentation** to highlight key thoracic structures
* 🔹 Fully **automated** and **easy to use** — suitable for beginners
* 🔹 **Deployed using Firebase & Node.js** for seamless online access

---

## 🧰 Technologies Used

| Category   | Tools / Frameworks                                                           |
| ---------- | ---------------------------------------------------------------------------- |
| Frontend   | HTML, CSS, JavaScript                                                        |
| Backend    | Hugging Face Space (Pretrained AI Model)                                     |
| Deployment | Firebase Hosting, Node.js                                                    |
| Model Type | Deep Learning (UNet for segmentation + classification for disease detection) |

---

## 🧑‍💻 Project Workflow Summary

1. **Input:** User uploads a chest X-ray image.
2. **Processing:** The image is sent to the Hugging Face model for inference.
3. **Output:** The model returns disease probabilities and a segmentation overlay.
4. **Display:** The web app shows the predictions and overlays the colored segmentation on the original X-ray.

---

## 🌐 Accessibility

* Works on **desktop**, **tablet**, and **mobile browsers**.
* Requires only an **internet connection** — no installation needed.
* Securely connects to Hugging Face APIs without exposing tokens publicly.

---

## 📸 Example Output

After uploading a chest X-ray, the app displays:

* Predicted **age** and **gender**
* **Pneumonia** and **Pneumothorax** detection percentages
* A **colored segmentation** showing:

  * 💙 Left Lung
  * 💚 Right Lung
  * ❤️ Heart

---

## 🧾 Key Takeaway

This project demonstrates how **AI models hosted on Hugging Face** can be easily integrated with **simple web interfaces** to create meaningful medical visualization tools — all without complex setup.

---

## 📜 License

This project is open-source and available for everyone. This project is not licensed and it is free to use.
It is intended for educational use only.
If you get any difficulties to understand this process please contact me through my email id 
emailid - shrinusn2001@gmail.com
