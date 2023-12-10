/* Crea un script que pida al usuario 5 números, y muestre en pantalla únicamente la suma 
de los que son números primos. */

//Decalaramos las variables de la suma y el contador de números introducidos por el usuario
let suma = 0;
let i = 0;
//Iniciamos el bucle de números del usuario
while (i < 5) {
  let primo = false;
  let num = parseInt(prompt(`Escribe un nº (${i + 1}): `));
  //Si el número introducido no es válido, volverá a pedirlo hasta que se meta un número correcto
  if (isNaN(num) || num < 0) {
    alert("Introduce un nº válido!");
  } else {
    //Si el número es correcto, avanza el contador
    i += 1;
  }
  //Cada número correcto será dividido por todos los números que hay entre el 2 y el mismo, inclusive
  for (j = 2; j <= num; j++) {
    //En el caso de que el número pueda dividirse por algun número y además ese número no es el mismo, no es un nº primo
    if (num % j === 0 && num !== j) {
      primo = false;
      break;
    } else {
      primo = true;
    }
  }
  //Solo se irán sumando en la variable suma aquellos números que hayan resultado ser primos
  if (primo === true) {
    suma += num;
  }
}
//Mostramos por pantalla la suma de todos aquellos nº que han resultado ser primos
alert(suma);
