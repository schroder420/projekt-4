const burger = document.getElementById("burger");
const menu = document.getElementById("navMenu");
const links = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    menu.classList.remove("active");
  });
}
