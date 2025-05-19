document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".quote-card__copy");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".quote-card");
      const text = card.querySelector(".quote-card__text").innerText;
      const author = card.querySelector(".quote-card__author").innerText;

      const fullQuote = `${text} ${author}`;
      navigator.clipboard.writeText(fullQuote).then(() => {
        console.log("Скопировано в буфер обмена:", fullQuote);
        const popup = document.getElementById("copiedPopup");
        popup.classList.add("show");

        setTimeout(() => {
        popup.classList.remove("show");
        }, 2000);
      });
    });
  });
});
