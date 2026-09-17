// Love Counter Logic (এখানে আপনাদের রিলেশনশিপের ডেট দিতে পারেন)
const startDate = new Date("2024-01-01T00:00:00"); 

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("mins").innerText = mins < 10 ? "0" + mins : mins;
  document.getElementById("secs").innerText = secs < 10 ? "0" + secs : secs;
}

setInterval(updateTimer, 1000);
updateTimer();

// Gift Popup Logic
const giftBtn = document.getElementById("giftBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

giftBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Play Button Dynamic Animation Toggle
const playBtn = document.getElementById("playBtn");
let isPlaying = false;
playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.innerText = isPlaying ? "⏸" : "▶";
});