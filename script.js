let count = 10;
const countdownEl = document.getElementById("countdown");
const timerSection = document.getElementById("timer-section");
const cakeSection = document.getElementById("cake-section");
const celebrationSection = document.getElementById("celebration-section");
const flame = document.getElementById("flame");
const cakeBox = document.getElementById("cakeBox");

// 1. Countdown Logic
const timerInterval = setInterval(() => {
  count--;
  countdownEl.innerText = count;

  if (count === 0) {
    clearInterval(timerInterval);
    timerSection.classList.add("hidden");
    cakeSection.classList.remove("hidden");
    shootSidePartySpray(); // Initial spray when cake appears
  }
}, 1000);

// 2. Side Party Spray (Confetti Poppers from Left & Right)
function shootSidePartySpray() {
  // Left Spray
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 70,
    origin: { x: 0, y: 0.8 },
    colors: ['#ff4d6d', '#ff758f', '#ffb3c6', '#a855f7']
  });
  
  // Right Spray
  confetti({
    particleCount: 80,
    angle: 120,
    spread: 70,
    origin: { x: 1, y: 0.8 },
    colors: ['#ff4d6d', '#ff758f', '#ffb3c6', '#a855f7']
  });
}

// 3. Blow Candle Event
cakeBox.addEventListener("click", blowCandle);

function blowCandle() {
  flame.style.display = "none";
  
  // Blast Heavy Side Party Sprays!
  shootSidePartySpray();
  setTimeout(shootSidePartySpray, 400);

  // Transition to Final Love Letter
  setTimeout(() => {
    cakeSection.classList.add("hidden");
    celebrationSection.classList.remove("hidden");
    shootSidePartySpray();
  }, 1000);
}