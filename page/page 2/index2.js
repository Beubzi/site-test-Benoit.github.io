// constante

const nav = document.querySelector("nav");

// script

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  }
});
