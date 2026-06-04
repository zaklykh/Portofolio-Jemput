const revealEls = document.querySelectorAll('.reveal');
const showOnScroll = () => {
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 90) el.classList.add('active');
  });
};
window.addEventListener('scroll', showOnScroll);
showOnScroll();

const card = document.querySelector('.game-card');
document.addEventListener('mousemove', e => {
  if (!card) return;
  const x = (window.innerWidth / 2 - e.pageX) / 45;
  const y = (window.innerHeight / 2 - e.pageY) / 45;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
