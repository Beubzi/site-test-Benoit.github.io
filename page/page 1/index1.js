// constante

const nav = document.querySelector("nav");

// script

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.top = 0;
  }
});
