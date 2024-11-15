document.addEventListener("DOMContentLoaded", function() {
    const bgVideo = document.getElementById("bg-video");
    const playButton = document.getElementById("play-button");

    // Attempt autoplay
    bgVideo.play().catch(error => {
        console.log("Autoplay blocked:", error);
        playButton.style.display = "block"; // Show play button if autoplay fails
    });

    // Play video when "Play Video" button is clicked (fallback)
    playButton.addEventListener("click", function() {
        bgVideo.play();
        playButton.style.display = "none"; // Hide the button once video is playing
    });

    // Mobile device support: play on first user interaction (touch/click)
    document.addEventListener("touchstart", function firstTouch() {
        bgVideo.play().then(() => {
            playButton.style.display = "none"; // Hide the button if playback starts
        }).catch(error => {
            playButton.style.display = "block"; // Show button if playback still fails
        });
        document.removeEventListener("touchstart", firstTouch); // Remove after first touch
    });
});
