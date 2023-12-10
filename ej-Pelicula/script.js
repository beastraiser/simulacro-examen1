/* 5.24 Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno, duración, género, los seis actores o actrices más importantes, la URL de su cartel promocional y su director; y una acción que permita mostrar en consola toda la información. El constructor recibirá los datos en una cadena JSON de la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba. */

let peliculaObj = {
  nombre: "Conan",
  estreno: 1999,
  duracion: 245,
  genero: "accion",
  actores: ["Jack", "Meryl", "Snake", "Alex", "Ocelot", "Alba"],
  url: "www.youtube.com",
  director: "Adam Nelson",
};

let JSONstring = JSON.stringify(peliculaObj);
/* console.log(JSONstring); */
let JSONobj = JSON.parse(JSONstring);
/* console.log(JSONobj); */

class Pelicula {
  constructor(JSONstring) {
    this.JSONobj = JSON.parse(JSONstring);
    this.nombre = this.JSONobj.nombre;
    this.estreno = this.JSONobj.estreno;
    this.duracion = this.JSONobj.duracion;
    this.genero = this.JSONobj.genero;
    this.actores = this.JSONobj.actores;
    this.url = this.JSONobj.url;
    this.director = this.JSONobj.director;
  }
  caracteristicas() {
    console.log(
      `Nombre: ${this.nombre}\nEstreno: ${this.estreno}\nDuración: ${this.duracion}\nGenero: ${this.genero}\nActores: ${this.actores}\nUrl: ${this.url}\nDirector: ${this.director}`
    );
  }
}

let miPelicula = new Pelicula(JSONstring);
miPelicula.caracteristicas();
