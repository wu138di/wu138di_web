document.addEventListener('DOMContentLoaded', function () {
  const bg = document.getElementById('bgAnimation');
  if (!bg) return;

  for (let i = 0; i < 10; i++) {
    const c = document.createElement('div');
    c.classList.add('circle');

    const size = Math.random() * 130 + 50;
    c.style.width = c.style.height = size + 'px';
    c.style.left = Math.random() * 100 + '%';
    c.style.top = Math.random() * 100 + '%';
    c.style.animationDuration = (Math.random() * 15 + 15) + 's';
    c.style.animationDelay = (Math.random() * 5) + 's';

    bg.appendChild(c);
  }
});