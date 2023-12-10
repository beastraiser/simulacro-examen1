// Obtén una NodeList de todos los elementos con la clase "arrow"
const arrows = document.querySelectorAll('.arrow');

// Itera sobre cada flecha y agrega un evento de clic
arrows.forEach(arrow => {
  arrow.addEventListener('click', function() {
    const subMenu = this.parentElement.nextElementSibling; // El submenú asociado a la flecha

    // Cambia la visibilidad del submenú
    subMenu.classList.toggle('show');

    // Cambia la clase "expanded" para girar la flecha
    this.parentElement.classList.toggle('expanded');
  });
});
