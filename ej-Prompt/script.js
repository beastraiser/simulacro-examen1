/* Pide al usuario varios datos por pantalla (Nombre, Apellidos y Edad), muestra por pantalla o en la consola los datos. Si el usuario no rellena los campos, deberá de haber un valor predeterminado. Ten en cuenta todos los posibles errores.*/

let ok = true;

while (ok) {
  var nombre = prompt("Nombre: ", "Alexandru");
  for (char in nombre) {
    if (!isNaN(nombre[char])) {
      alert("Introduce un nombre válido!");
      ok = true;
      break;
    } else {
      ok = false;
    }
  }
}

ok = true;
while (ok) {
  var apellido = prompt("Apellido: ", "Bulc");
  for (char in apellido) {
    if (!isNaN(apellido[char])) {
      alert("Introduce un nombre válido!");
      ok = true;
      break;
    } else {
      ok = false;
    }
  }
}

ok = true;
while (ok) {
  var edad = parseInt(prompt("Edad: ", 27));
  if (isNaN(edad) || edad < 0) {
    alert("Escribe una edad válida");
  } else {
    ok = false;
  }
}

alert(`${nombre} ${apellido} ${edad}`);
