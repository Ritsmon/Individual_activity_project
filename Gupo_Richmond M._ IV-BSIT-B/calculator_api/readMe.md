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
