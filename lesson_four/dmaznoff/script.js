const cards = document.querySelectorAll('.card');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < triggerBottom && rect.bottom > 0;

    if (isVisible) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
