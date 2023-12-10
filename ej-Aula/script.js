/* 5.20 Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de Aula, para modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que evidenciar el concepto del polimorfismo. */

class Aula {
  constructor(m2, color, nombre) {
    this.m2 = m2;
    this.color = color;
    this.nombre = nombre;
  }
  mostrarPropiedades() {}
}

class Musica extends Aula {
  constructor(m2, color, nombre, edificio) {
    //tienen que aparecer todos los datos que se van a declarar, incluidos los de la clase padre
    super(m2, color, nombre); //aquí se declaran los atributos que va a heredar. También se puede dejar en blanco y referenciarlos abajo como hicimos en la clase padre. También se pueden poner directamente los valores.
    this.edificio = edificio;
  }
  mostrarPropiedades() {
    console.log(
      `El aula de ${this.nombre} tiene ${this.m2} m2 y es ${this.color}!\nEstá en el edificio ${this.edificio}`
    );
  }
}

class Tecnología extends Aula {
  constructor(color, nombre) {
    //El nombre de los parametros del constructor no importan, tampoco la cantidad
    super(color, color, nombre); //Lo importante es que aquí haya el mismo numero de atributos que en la clase padre y tomen los mismos nombres definidos en el constructor de arriba
  }
  mostrarPropiedades() {
    console.log(`El aula de ${this.nombre} y es ${this.color}!\n`);
  }
}

let aulaMusica = new Musica(40, "rojo", "musica", 3);
let aulaTecno = new Tecnología("verde", "tecno");
aulaMusica.mostrarPropiedades();
console.log("---------------------------");
aulaTecno.mostrarPropiedades();
