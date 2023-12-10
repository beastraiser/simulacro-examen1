hola = "Hola";
saludos = ["hola", "hello"];
for (i in hola) {
  console.log(`posicion ${i} valor ${hola[i]}`);
}
console.log("-----------");
for (i of hola) {
  console.log(i);
}
console.log("-----------");
saludos.forEach((i) => {
  console.log(i);
});
