const hamb = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamb.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
