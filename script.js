const menu = document.querySelector(".menu-bar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hamburger-menu");
  hamburger.classList.toggle("open");
});
