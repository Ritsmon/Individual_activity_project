const nameInput = document.getElementById('nameInput');
const predictBtn = document.getElementById('predictBtn');
const resultCard = document.getElementById('resultCard');
const displayName = document.getElementById('displayName');
const genderLabel = document.getElementById('genderLabel');
const probText = document.getElementById('probabilityText');
const errorText = document.getElementById('errorText');

async function getGender() {
    const name = nameInput.value.trim();
    
    if (name === "") {
        errorText.classList.remove('hidden');
        return;
    }

    errorText.classList.add('hidden');
    
    try {
        const response = await fetch(`https://api.genderize.io?name=${name}`);
        const data = await response.json();

        if (data.gender) {
            // Update Text
            displayName.innerText = data.name;
            genderLabel.innerText = data.gender;
            probText.innerText = `Probability: ${(data.probability * 100).toFixed(0)}%`;

            // Update UI Colors
            resultCard.className = "result-card"; // Reset classes
            resultCard.classList.add(data.gender); // Add 'male' or 'female'
            resultCard.classList.remove('hidden');
        } else {
            alert("Could not determine gender for this name.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

predictBtn.addEventListener('click', getGender);

// Allow pressing "Enter" key to search
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getGender();
});