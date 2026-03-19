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
  "5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario",
);
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log(
  "6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos",
);
function encontrarComunes(Array1, Array2) {
  const comunes = [];
  for (let i = 0; i < Array1.length; i++) {
    if (Array2.includes(Array1[i])) {
      comunes.push(Array1[i]);
    }
  }
  return comunes;
}
console.log(encontrarComunes([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log(
  "7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares",
);
function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}
console.log(sumarPares([1, 2, 3, 4, 5, 6])); // 12

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log(
  "8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado",
);
function elevarAlCuadrado(numeros) {
  const cuadrados = [];
  for (let i = 0; i < numeros.length; i++) {
    cuadrados.push(numeros[i] ** 2);
  }
  return cuadrados;
}
console.log(elevarAlCuadrado([1, 2, 3, 4])); // [1, 4, 9, 16]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log(
  "9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso",
);
function invertirPalabras(texto) {
  return texto.split(" ").reverse().join(" ");
}
console.log(invertirPalabras("Hola Mundo")); // "Mundo Hola"

// 10. Crea una función que calcule el factorial de un número dado
console.log("10. Crea una función que calcule el factorial de un número dado");
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(5)); // 120
