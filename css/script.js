document.getElementById('saveProgress').addEventListener('click', saveProgress);

function saveProgress() {
    // Get values from the input fields
    const date = document.getElementById('date').value;
    const weight = document.getElementById('weight').value;
    const pushups = document.getElementById('pushups').value;
    const squats = document.getElementById('squats').value;

    if (date && weight && pushups && squats) {
        // Get saved progress from localStorage
        let progress = JSON.parse(localStorage.getItem('progress')) || [];

        // Create a new progress object
        const newProgress = {
            date: date,
            weight: weight,
            pushups: pushups,
            squats: squats
        };

        // Add the new progress to the array
        progress.push(newProgress);

        // Save the updated progress back to localStorage
        localStorage.setItem('progress', JSON.stringify(progress));

        // Update the progress display
        displayProgress();
        clearForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayProgress() {
    const progressList = document.getElementById('progressList');
    progressList.innerHTML = '';

    // Get progress from localStorage
    let progress = JSON.parse(localStorage.getItem('progress')) || [];

    // Display the saved progress
    progress.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('progress-item');
        div.innerHTML = `
            <strong>Date:</strong> ${item.date} <br>
            <strong>Weight:</strong> ${item.weight} kg <br>
            <strong>Push-ups:</strong> ${item.pushups} reps <br>
            <strong>Squats:</strong> ${item.squats} reps
        `;
        progressList.appendChild(div);
    });
}

function clearForm() {
    // Clear the form after saving progress
    document.getElementById('date').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('pushups').value = '';
    document.getElementById('squats').value = '';
}

// Load saved progress when the page loads
window.onload = displayProgress;