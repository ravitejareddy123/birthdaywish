document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bg-music");
    const playButton = document.getElementById("play-button");

    // Attempt to unmute and play audio on load
    bgMusic.muted = false;

    // Attempt autoplay
    bgMusic.play().catch(error => {
        console.log("Autoplay blocked:", error);
        playButton.style.display = "block"; // Show play button if autoplay fails
    });

    // Play music when "Play Music" button is clicked (fallback)
    playButton.addEventListener("click", function() {
        bgMusic.play();
        playButton.style.display = "none"; // Hide the button once music is playing
    });

    // Mobile device support: play on first user interaction (touch/click)
    document.addEventListener("touchstart", function firstTouch() {
        bgMusic.play().then(() => {
            playButton.style.display = "none"; // Hide the button if playback starts
        }).catch(error => {
            playButton.style.display = "block"; // Show button if playback still fails
        });
        document.removeEventListener("touchstart", firstTouch); // Remove after first touch
    });
});
