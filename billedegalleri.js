// ============================================================
// MINI-LIBRARY
// ============================================================
const MiniLib = {
  qs(sel, parent = document) { return parent.querySelector(sel); },
  qsa(sel, parent = document) { return [...parent.querySelectorAll(sel)]; },
  on(el, evt, fn) { el.addEventListener(evt, fn); }
};

// ============================================================
// VARIABLER
// ============================================================
let currentStart = 0;

// Denne variabel ændres dynamisk (1 på mobil, 3 på desktop)
let imagesPerPage = window.innerWidth < 768 ? 1 : 3;

// ============================================================
// DINE 6 BILLEDER
// ============================================================
const images = [
  { src: "billeder/billede1.webp", title: "Billede 1" },
  { src: "billeder/billede2.webp", title: "Billede 2" },
  { src: "billeder/billede3.webp", title: "Billede 3" },
  { src: "billeder/billede4.webp", title: "Billede 4" },
  { src: "billeder/billede5.webp", title: "Billede 5" },
  { src: "billeder/billede6.webp", title: "Billede 6" }
];

// ============================================================
// DOM
// ============================================================
const galleryEl = MiniLib.qs("#gallery");
const prevBtn = MiniLib.qs("#prevBtn");
const nextBtn = MiniLib.qs("#nextBtn");

// ============================================================
// FUNKTIONER
// ============================================================

// Skift mellem 1 og 3 billeder afhængigt af skærmstørrelse
function updateImagesPerPage() {
  imagesPerPage = window.innerWidth < 768 ? 1 : 3;
}

// Byg ét billede
function createGalleryItem(imgObj) {
  const item = document.createElement("div");
  item.className = "gallery__item";

  const img = document.createElement("img");
  img.src = imgObj.src;
  img.alt = imgObj.title;

  item.appendChild(img);
  return item;
}

// Vis billeder (ALTID wrap rundt, så der vises fuldt antal)
function renderGallery() {
  galleryEl.innerHTML = "";

  for (let k = 0; k < imagesPerPage; k++) {
    const idx = (currentStart + k) % images.length; // 👈 wrap
    galleryEl.appendChild(createGalleryItem(images[idx]));
  }
}

// Næste (ét billede frem)
function nextImages() {
  currentStart = (currentStart + 1) % images.length; // 👈 altid 1
  renderGallery();
}

// Forrige (ét billede tilbage)
function prevImages() {
  currentStart = (currentStart - 1 + images.length) % images.length; // 👈 altid 1
  renderGallery();
}

// Init
updateImagesPerPage();
renderGallery();

// Klik-events
nextBtn.addEventListener("click", nextImages);
prevBtn.addEventListener("click", prevImages);

// Opdater ved resize
window.addEventListener("resize", () => {
  updateImagesPerPage();
  renderGallery();
});