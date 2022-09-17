const abtnImg = document.querySelector('#abtnImg');
const amenu = document.querySelector('#amenu');
const amenuClose = document.querySelectorAll('.amenuClose');
abtnImg.addEventListener('click', () => {
  amenu.classList.toggle('active');
});

amenuClose.forEach((e) => {
  e.addEventListener('click', () => {
    amenu.classList.toggle('active');
  });
});