/* Obten la hora actual del día con los métodos date() y getHours(). A continuación da los buendos días, buenas tardes o buenas noches dependiendo de la hora. */

let horaActual = new Date().getHours();

if (horaActual >= 6 && horaActual <= 15) {
  console.log(`Buenos días, son las ${horaActual}`);
} else if (horaActual > 15 && horaActual <= 20) {
  console.log(`Buenas tardes, son las ${horaActual}`);
} else {
  console.log(`Buenas noches, son las ${horaActual}`);
}
