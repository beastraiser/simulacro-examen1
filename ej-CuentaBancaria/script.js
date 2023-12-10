/* Realiza una función prototipo llamada cuenta bancaria que tenga 3 atributos genéricos (nombre, dni, edad) y un atributo importante "saldo". Además tendrá 2 métodos: retirar dinero e ingresar dinero. Probar su funcionamiento con un ingreso y una retirada (pág 12/pdf POO)*/

function cuentaBancaria(nombre, dni, edad, saldo) {
  this.nombre = nombre;
  this.dni = dni;
  this.edad = edad;
  this.saldo = saldo;

  this.retirar = function (cantidad) {
    this.saldo -= cantidad;
  };
  this.ingresar = function (cantidad) {
    this.saldo += cantidad;
  };
  this.mostrar_saldo = function () {
    console.log(`Saldo disponible: ${this.saldo}`);
  };
}

let miCuenta = new cuentaBancaria("Alex", 3244324, 27, 4500);
miCuenta.mostrar_saldo();
console.log("-----------------");
miCuenta.ingresar(1000);
miCuenta.mostrar_saldo();
console.log("-----------------");
miCuenta.retirar(2000);
miCuenta.mostrar_saldo();
