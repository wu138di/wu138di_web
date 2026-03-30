document.addEventListener('DOMContentLoaded', function () {
  const bg = document.getElementById('bgAnimation');
  if (bg) {
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 4 + 4) + 's';
      star.style.animationDelay = (Math.random() * 4) + 's';
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      bg.appendChild(star);
    }
  }

  const images = ['/images/mzk.jpg', '/images/mzk2.png', '/images/mzk3.png', '/images/mzk4.png'];
  const fadeDuration = 2000;
  const interval = 5000;

  const a = document.getElementById('bg-layer-a');
  const b = document.getElementById('bg-layer-b');
  if (!a || !b) return;

  let i = 0;
  let front = a, back = b;

  front.style.backgroundImage = `url('${images[0]}')`;
  front.style.opacity = '1';
  back.style.opacity = '0';

  function go(n) {
    n = (n + images.length) % images.length;
    if (n === i) return;

    back.style.backgroundImage = `url('${images[n]}')`;

    requestAnimationFrame(() => {
      back.style.opacity = '1';
      front.style.opacity = '0';
    });

    setTimeout(() => {
      const t = front;
      front = back;
      back = t;
      i = n;
    }, fadeDuration + 30);
  }

  if (images.length > 1) {
    setTimeout(() => setInterval(() => go(i + 1), interval), interval);
  }
});