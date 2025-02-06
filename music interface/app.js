document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle play button click
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', () => {
        console.log('Play button clicked');
        // Add your play functionality here
    });

    // Function to handle pause button click
    const pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', () => {
        console.log('Pause button clicked');
        // Add your pause functionality here
    });

    // Function to handle stop button click
    const stopButton = document.getElementById('stopButton');
    stopButton.addEventListener('click', () => {
        console.log('Stop button clicked');
        // Add your stop functionality here
    });
});
// Function to update the play/pause icon
const updatePlayPauseIcon = (isPlaying) => {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
};

// Function to handle play button click
playButton.addEventListener('click', () => {
    console.log('Play button clicked');
    // Add your play functionality here
    updatePlayPauseIcon(true);
});

// Function to handle pause button click
pauseButton.addEventListener('click', () => {
    console.log('Pause button clicked');
    // Add your pause functionality here
    updatePlayPauseIcon(false);
});

// Function to handle stop button click
stopButton.addEventListener('click', () => {
    console.log('Stop button clicked');
    // Add your stop functionality here
    updatePlayPauseIcon(false);
});