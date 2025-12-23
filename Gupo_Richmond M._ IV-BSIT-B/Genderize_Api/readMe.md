# 🧬 GenderPredictor Pro

A sophisticated web application that uses machine learning-based data to predict the gender of a name. Built with a modern "Glassmorphism" UI, this project demonstrates high-level API integration, asynchronous JavaScript, and advanced CSS animations.

## ✨ Features
* **Real-time Prediction:** Connects to the [Genderize.io API](https://genderize.io/) to analyze names instantly.
* **Glassmorphism Design:** A beautiful UI featuring backdrop filters, soft shadows, and deep gradients.
* **Data Visualization:** Displays prediction results with color-coded badges (Male/Female) and accurate probability percentages.
* **Micro-interactions:** Smooth animations including `slideUp` for result cards and `shake` for input errors.
* **Responsive & Accessible:** Fully optimized for mobile devices and keyboard navigation.

## 🛠️ Technical Breakdown

### 📡 External API Integration
This project fetches data from a third-party REST API.
- **Endpoint:** `https://api.genderize.io/?name={name}`
- **Implementation:** Uses the `fetch` API with `async/await` to handle network requests without blocking the main thread.

### 🎨 Advanced CSS Architecture
* **Flexbox & Grid:** Used for precise centering and search-box alignment.
* **Custom Properties (Variables):** Managed color palettes (e.g., `--male-color`, `--female-color`) for easy theme updates.
* **Visual Polish:** Implements `backdrop-filter: blur()` for that modern frosted-glass effect.

### 🧠 Logic Highlights
- **State Management:** Toggles between `hidden` and active states to provide a clean user experience.
- **Form Validation:** Prevents empty submissions and provides visual feedback via CSS animations.
- **Data Destructuring:** Efficiently parses JSON responses to display probability and gender labels.
