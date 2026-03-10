/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("1. Crea una función que reciba dos números y devuelva su suma");
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log(
  "2. Crea una función que reciba un array de números y devuelva el mayor de ellos",
);
function encontrarMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}
console.log(encontrarMayor([3, 7, 2, 9, 5]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log(
  "3. Crea una función que reciba un string y devuelva el número de vocales que contiene",
);
function contarVocales(texto) {
  const vocales = "aeiouAEIOU";
  let contadorVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contadorVocales++;
    }
  }
  return contadorVocales;
}
console.log(contarVocales("Hola Mundo"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log(
  "4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas",
);
function convertirMayusculas(strings) {
  const mayúsculas = [];
  for (let i = 0; i < strings.length; i++) {
    mayúsculas.push(strings[i].toUpperCase());
  }
  return mayúsculas;
}
console.log(convertirMayusculas(["hola", "mundo", "javascript"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log(

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
