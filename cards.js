// Henter alle cards (array)
let cards = document.querySelectorAll(".card");

// Loop gennem alle cards
for (let i = 0; i < cards.length; i++) {

  // Tilføj click event
  cards[i].addEventListener("click", function () {

    // Variabel (boolean)
    let isActive = this.classList.contains("active");

    // Loop: luk alle først
    for (let j = 0; j < cards.length; j++) {
      cards[j].classList.remove("active");
    }

    // If/else kontrolstruktur
    if (!isActive) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
    }

  });
}
