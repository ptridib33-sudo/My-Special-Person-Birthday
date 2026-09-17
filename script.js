let count = 10;
const countdownEl = document.getElementById("countdown");
const timerSection = document.getElementById("timer-section");
const cakeSection = document.getElementById("cake-section");
const celebrationSection = document.getElementById("celebration-section");
const candle = document.getElementById("candle");
const flame = document.getElementById("flame");

// 1. Start 10-Second Countdown
const timerInterval = setInterval(() => {
  count--;
  countdownEl.innerText = count;

  if (count === 0) {
    clearInterval(timerInterval);
    timerSection.classList.add("hidden");
    cakeSection.classList.remove("hidden");
    
    triggerFireworks();
  }
}, 1000);

// 2. Fireworks Function using Confetti Library
function triggerFireworks() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

// 3. Blow Out Candle Action
candle.addEventListener("click", blowCandle);

function blowCandle() {
  flame.style.display = "none";
  triggerFireworks();

  setTimeout(() => {
    cakeSection.classList.add("hidden");
    celebrationSection.classList.remove("hidden");
  }, 1000);
}