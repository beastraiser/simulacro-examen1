const flechas = document.querySelectorAll(".arrow");

flechas.forEach((flecha) => {
  flecha.addEventListener("click", function () {
    const subMenu = this.parentElement.nextElementSibling;
    subMenu.classList.toggle("show");
    flecha.parentElement.classList.toggle("expanded");
    flecha.classList.toggle("arrow-rotate");
  });
});
