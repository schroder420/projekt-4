// -------------------------------
// Variabler (LET) + Arrays
// -------------------------------
let faqItems = document.querySelectorAll(".faq-item");
let faqArray = Array.from(faqItems); // array af DOM-elementer

// -------------------------------
// Funktion: Toggle dropdown
// (viser DOM, if-else, operatorer, scope)
// -------------------------------
function toggleFAQ(item) {

    // tjek om elementet allerede er åbent
    let isOpen = item.classList.contains("open");

    if (isOpen === true) {
        // hvis åbent → luk det
        item.classList.remove("open");
    } else {
        // ellers → åbn det
        item.classList.add("open");
    }
}

// -------------------------------
// Loop + Event Listeners
// -------------------------------
for (let i = 0; i < faqArray.length; i++) {
    let questionButton = faqArray[i].querySelector(".faq-question");

    // Event (klik) — demonstrerer DOM events
    questionButton.addEventListener("click", function () {
        toggleFAQ(faqArray[i]);
    });
}
