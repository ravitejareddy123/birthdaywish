// Adding an event listener for music
document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bg-music");

    // Play music when page is loaded
    bgMusic.play();

    // Function to toggle music on/off when clicked
    bgMusic.addEventListener("click", function() {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    });
});
