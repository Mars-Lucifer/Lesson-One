const cards = document.querySelectorAll(".card");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < triggerBottom && rect.bottom > 0;

    if (isVisible) {
      card.style.transitionDelay = `${index * 0.1}s`;
      card.classList.add("visible");
    } else {
      card.style.transitionDelay = "0s";
      card.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const cartElement = document.getElementById("cart");
const buyButtons = document.querySelectorAll(".buy-button");
const clearButton = document.getElementById("clear-cart");

function updateCart() {
  cartCounter.textContent = cartCount;
  cartCounter.classList.add("count-update");
  setTimeout(() => cartCounter.classList.remove("count-update"), 300);
}

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    updateCart();

    cartElement.classList.add("count-update");
    setTimeout(() => cartElement.classList.remove("count-update"), 300);
  });
});

clearButton.addEventListener("click", () => {
  if (cartCount > 0) {
    cartCount = 0;
    updateCart();
    cartElement.classList.add("cart-clear");
    setTimeout(() => cartElement.classList.remove("cart-clear"), 400);
  }
});
