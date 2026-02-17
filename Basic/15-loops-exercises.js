/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("1. Crea un bucle que imprima los números del 1 al 20");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log(
  "2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado",
);
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("La suma de los números del 1 al 100 es: " + sum);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log(
  "3. Crea un bucle que imprima todos los números pares entre 1 y 50",
);
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log(
  "4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola",
);
const names = ["jose", "maria", "pedro", "lucia"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log(
  "5. Escribe un bucle que cuente el número de vocales en una cadena de texto",
);
const texto = "Hola, ¿como estas?";
let vocalesCount = 0;
for (let i = 0; i < texto.length; i++) {
  const charter = texto[i].toLowerCase();
  if (
    charter === "a" ||
    charter === "e" ||
    charter === "i" ||
    charter === "o" ||
    charter === "u"
  ) {
    vocalesCount++;
  }
}
console.log(`El número de vocales en el texto es: ${vocalesCount}`);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log(
  "6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto",
);
const numbers = [2, 3, 4];
let product = 1;
for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i];
}
console.log(`El producto de los números es: "${product}"`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("7. Escribe un bucle que imprima la tabla de multiplicar del 5");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("8. Usa un bucle para invertir una cadena de texto");
const originaltext = "hola mundo";
let reversedText = "";
for (let i = originaltext.length - 1; i >= 0; i--) {
  reversedText += originaltext[i];
}
console.log(`El texto invertido es: "${reversedText}"`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log(
  "9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci",
);

const fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(
  "Los primeros 10 números de la secuencia de Fibonacci son: " + fibonacci,
);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log(
  "10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10",
);
const numArray = [5, 12, 8, 20, 3];
const greaterThanTen = [];
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > 10) {
    greaterThanTen.push(numArray[i]);
  }
}
console.log("Números mayores a 10:", greaterThanTen);
