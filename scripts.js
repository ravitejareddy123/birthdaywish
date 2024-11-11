document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bg-music");
    const playButton = document.getElementById("play-button");

    // Attempt to unmute and play audio on load
    bgMusic.muted = false;
    bgMusic.play().catch(error => {
        console.log("Autoplay blocked: ", error);
        playButton.style.display = "block"; // Show the play button if autoplay is blocked
    });

    // Play music when the "Play Music" button is clicked (fallback)
    playButton.addEventListener("click", function() {
        bgMusic.play();
        playButton.style.display = "none"; // Hide the button once music is playing
    });
});
