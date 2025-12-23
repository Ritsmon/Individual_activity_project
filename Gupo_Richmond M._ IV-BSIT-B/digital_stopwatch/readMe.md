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

