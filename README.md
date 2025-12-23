# Individual_activity_project
Weather App, Calculator App, Digital Stopwatch_App, Genderize_App



# 🌦️ Weather App

A sleek, modern weather dashboard that provides real-time atmospheric data using the OpenWeatherMap API. This project demonstrates advanced JavaScript techniques including `async/await`, dynamic DOM manipulation, and responsive CSS design.

## ✨ Features
* **Real-time Data:** Fetches live temperature, humidity, and weather conditions.
* **Dynamic Visuals:** Custom weather emojis and gradient backgrounds that reflect current conditions.
* **Smart Error Handling:** Graceful handling of "City Not Found" or empty search queries with visual shake animations.
* **Responsive Design:** Uses `clamp()` and Flexbox to ensure a beautiful experience on both mobile and desktop.

## 🛠️ Technical Breakdown

### 📡 API Integration
The app communicates with the **OpenWeatherMap API** to retrieve JSON data. It uses the `fetch` API wrapped in an `async` function to ensure smooth, non-blocking UI updates.

### 🧠 Logic Highlights
* **Data Destructuring:** Efficiently extracts data from complex nested API responses.
* **Condition Mapping:** A custom `getWeatherEmoji` function uses weather IDs (e.g., 200 for Thunderstorm, 800 for Clear) to display the correct icon.
* **DOM Manipulation:** Elements are created and appended dynamically to the `card` container.



# 🔢 Calculator

A high-performance, visually striking web calculator featuring an animated glowing aura and a sleek dark-mode aesthetic. This project demonstrates clean JavaScript logic paired with advanced CSS3 animation techniques.

## ✨ Features
* **Animated Neon Border:** A dynamic, rotating glow effect built using CSS custom properties and `@keyframes`.
* **Instant Calculation:** Real-time evaluation of mathematical expressions.
* **Responsive Grid:** A perfectly centered, mobile-friendly 4-column layout using CSS Grid.
* **Tactile Feedback:** Smooth hover and active states (scaling effects) for a premium user experience.
* **Error Handling:** Built-in validation to display "ERROR" for mathematically impossible operations.

## 🎨 Visual Design
The UI is inspired by modern "Glassmorphism" and "Neon" trends:
- **Background:** Dark-themed (#1e1e1e) for high contrast.
- **Accent Colors:** Vibrant orange (#ff9f0a) for operators and critical functions.
- **Typography:** Professional `"Courier New", monospace` for a technical, precise feel.

---

## 🛠️ Technical Breakdown

### 🧠 JavaScript Logic
The app uses a streamlined approach to handle arithmetic:
* **`appendToDisplay(input)`**: Appends numbers and operators to the string buffer.
* **`calculate()`**: Uses the JavaScript `eval()` engine wrapped in a `try...catch` block to handle calculations and errors safely.
* **`clearDisplay()`**: Resets the state for new computations.

### 💄 Advanced CSS Techniques
* **Pseudo-elements (`::before`)**: Used to create the glowing border without affecting the main calculator's layout.
* **`aspect-ratio: 1`**: Ensures all buttons remain perfectly circular regardless of screen width.
* **`clamp()`**: Responsive font sizing for the display to prevent text overflow on small screens.




# ⏱️ Stopwatch

A high-accuracy, millisecond-precision stopwatch built with Vanilla JavaScript. This tool is designed for performance and reliability, featuring a clean, responsive interface and robust time-tracking logic.

## ✨ Features
* **Millisecond Precision:** Tracks time down to the 1/100th of a second for professional accuracy.
* **Time Drift Correction:** Uses `Date.now()` logic to ensure timing remains accurate even if the browser slows down.
* **Interactive UI:** Smooth hover transitions, scale-on-click feedback, and a clean "Courier New" monospace aesthetic.
* **Responsive Design:** Utilizes `clamp()` typography and Flexbox to look great on phones, tablets, and desktops.
* **Visual States:** Distinct color-coded buttons for Start, Stop, and Reset actions.

---

## 🛠️ Technical Breakdown

### 🧠 The Logic Layer
The stopwatch uses a non-drifting time calculation method:
1. **StartTime:** Captures the timestamp when "Start" is clicked.
2. **ElapsedTime:** Calculates the difference between `Date.now()` and the `startTime`.
3. **The Math:** - Hours, minutes, and seconds are calculated using `Math.floor` and the Modulo (`%`) operator.
   - Values are formatted using `.padStart(2, "0")` to ensure the classic `00:00:00:00` look.

### 🎨 Styling & UX
* **Gradients:** A subtle `linear-gradient` background provides a premium feel.
* **Hover Effects:** Buttons change color and scale up slightly when hovered to provide clear affordance.
* **Monospace Font:** Using `Courier New` ensures that digits don't "jump" or wiggle as the numbers change, as every character takes up the same width.

---






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

