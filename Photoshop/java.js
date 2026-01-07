// Всі картинки галереї
const images = document.querySelectorAll('.zero img');

// Overlay і елементи
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close');

// Клік по будь-якому фото
images.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex'; // показуємо overlay
    overlayImg.src = img.src;       // підставляємо картинку
  });
});

// Закриття по хрестику
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Закриття по кліку на фон
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
