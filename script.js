const typewriterEl = document.getElementById('typewriter');
const words = ['null_raw', 'azam'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeTick() {
  const current = words[wordIndex];
  let pause = deleting ? 55 : 110;

  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      pause = 1400;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      pause = 300;
    }
  }

  setTimeout(typeTick, pause);
}

typeTick();

const toggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  toggleBtn.textContent = isLight ? 'switch to dark' : 'switch to light';
  localStorage.setItem('null_raw-theme', theme);
}

const saved = localStorage.getItem('null_raw-theme') || 'dark';
applyTheme(saved);

toggleBtn.addEventListener('click', () => {
  const next = document.body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
});
