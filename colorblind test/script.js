let currentPlate = 0;

const plates = ['plate1', 'plate2'];

function createDots(plateId) {
    const plate = document.getElementById(plateId);
    // Generate 1000 random dots for each plate
    for (let i = 0; i < 1000; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Randomly choose a color from a similar palette
        const colors = ['#f0a0a0', '#f0d0a0', '#a0f0a0', '#a0f0d0', '#a0f0f0', '#d0a0f0', '#f0a0d0', '#f0f0a0'];
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Randomly position the dot within the plate
        const size = Math.random() * (30 - 15) + 15; // Random size between 15px and 30px
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.left = `${Math.random() * 100}%`;

        plate.appendChild(dot);
    }

    // Create a random number button below the plate
    createRandomNumberButton(plateId);
}

function createRandomNumberButton(plateId) {
    const plate = document.getElementById(plateId);
    const buttonContainer = document.createElement('div'); // Create a container for the button
    const button = document.createElement('button');
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    button.innerText = randomNumber;
    button.classList.add('random-number-button');

    buttonContainer.style.textAlign = 'center'; // Center the button below the plate
    buttonContainer.appendChild(button); // Add the button to the container
    plate.parentNode.insertBefore(buttonContainer, plate.nextSibling); // Insert the button below the plate
}

function nextPlate() {
    if (currentPlate < plates.length - 1) {
        document.getElementById(plates[currentPlate]).style.display = 'none';
        currentPlate++;
        document.getElementById(plates[currentPlate]).style.display = 'block';
    } else {
        displayResults(); // Call to display fake results when the test is complete
    }
}

function displayResults() {
    const resultText = document.getElementById('result');

    // Array of fake failure messages
    const fakeMessages = [
        "Unfortunately, you failed the Ishihara test. Please consult a specialist for a proper assessment.",
        "Your results indicate a color vision deficiency. It's recommended to see an eye care professional.",
        "The test suggests a potential issue with color perception. A follow-up examination is advised.",
        "You did not pass the Ishihara test. Consider discussing your results with an optometrist.",
        "The results are inconclusive regarding your color vision. A detailed assessment may be necessary."
    ];

    // Randomly select a message from the array
    const randomIndex = Math.floor(Math.random() * fakeMessages.length);
    resultText.innerText = fakeMessages[randomIndex]; // Display the randomly selected message
}

// Initially hide all plates except the first one
plates.forEach((plate, index) => {
    createDots(plate); // Create random dots for each plate
    document.getElementById(plate).style.display = index === 0 ? 'block' : 'none';
});
