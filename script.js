// Relationship Start Date
const startDate = new Date("March 1, 2024 00:00:00");

// Update Timer
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = 
        `${days} Days, ${hours} Hrs, ${minutes} Min, ${seconds} Sec`;
}

// Update Timer Every Second
setInterval(updateTimer, 1000);
updateTimer();

// Music Play/Pause
const player = document.getElementById("musicPlayer");
function toggleMusic() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
