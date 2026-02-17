/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
console.log("Crea un array que almacene cinco animales");
const animales = ["perro", "gato", "elefante", "tigre", "jirafa"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
console.log("Añade dos más. Uno al principio y otro al final");
animales.unshift("león");
animales.push("cebra");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
console.log("Elimina el que se encuentra en tercera posición");
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
console.log("Crea un set que almacene cinco libros");
const libros = new Set([
  "1984",
  "Cien años de soledad",
  "Don Quijote",
  "El Principito",
  "Moby Dick",
]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
console.log("Añade dos más. Uno de ellos repetido");
libros.add("Hamlet");
libros.add("1984"); // Repetido
console.log(libros);

// 6. Elimina uno concreto a tu elección
console.log("Elimina uno concreto a tu elección");
libros.delete("Moby Dick");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("Crea un mapa que asocie el número del mes a su nombre");
const meses = new Map([
  [1, "Enero"],
  [2, "febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("Comprueba si el mes número 5 existe en el map e imprime su valor");
if (meses.has(5)) {
  console.log("el mes 5 es: " + meses.get(5));
} else {
  console.log("el mes 5 no existe");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log(
  "Añade al mapa una clave con un array que almacene los meses de verano",
);
meses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("Crea un Array, transfórmalo a un Set y almacénalo en un Map");
const arrayNumeros = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const setNumeros = new Set(arrayNumeros);
const mapNumeros = new Map();
mapNumeros.set("numerosUnicos", setNumeros);
console.log(mapNumeros);

// Imprime el Map completo
console.log("Imprime el Map completo");
console.log(mapNumeros);

// Imprime el Set almacenado en el Map
console.log("Imprime el Set almacenado en el Map");
console.log(mapNumeros.get("numerosUnicos"));

// Imprime el segundo número del Set almacenado en el Map
console.log("Imprime el segundo número del Set almacenado en el Map");
const setDesdeMap = mapNumeros.get("numerosUnicos");
const segundoNumero = Array.from(setDesdeMap)[1];
console.log(segundoNumero);
