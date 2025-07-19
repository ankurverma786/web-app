// Generate numbers 1-12 around the clock
const numbersContainer = document.querySelector('.numbers');
for (let i = 1; i <= 12; i++) {
  const angle = (i - 3) * (Math.PI * 2) / 12; // -3 to start at top
  const x = 50 + 42 * Math.cos(angle);
  const y = 50 + 42 * Math.sin(angle);
  const number = document.createElement('div');
  number.className = 'number';
  number.style.left = `${x}%`;
  number.style.top = `${y}%`;
  number.textContent = i;
  numbersContainer.appendChild(number);
}

// Move clock hands
function setClock() {
  const now = new Date();
  const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes() + sec / 60;
  const hr = now.getHours() % 12 + min / 60;

  document.getElementById('hour').style.transform =
    `translate(-50%, 0) rotate(${hr * 30}deg)`;
  document.getElementById('minute').style.transform =
    `translate(-50%, 0) rotate(${min * 6}deg)`;
  document.getElementById('second').style.transform =
    `translate(-50%, 0) rotate(${sec * 6}deg)`;
  requestAnimationFrame(setClock);
}
setClock();

// Theme toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent =
    document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});