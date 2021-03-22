const burger = document.querySelector(".hamburger-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

burger.addEventListener("click", () => {
  nav.classList.toggle("show-nav");

  burger.classList.toggle("show");

  navLinks.forEach((link, i) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `showLinks .4s ease forwards ${i / 7 + 0.4}s`;
    }
  });
});
