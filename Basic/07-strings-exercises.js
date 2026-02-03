/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("1. Concatenación de cadenas");
let cadena1 = "Hola, ";
let cadena2 = "mundo";
let resultado = cadena1 + cadena2;
console.log(resultado);

// 2. Muestra la longitud de una cadena de texto
console.log("2. Longitud de la cadena");
let cadena = "JavaScript es genial";
console.log(cadena.length);

// 3. Muestra el primer y último carácter de un string
console.log("3. Primer y último carácter");
console.log(cadena[0]); // Primer carácter
console.log(cadena[cadena.length - 1]); // Último carácter

// 4. Convierte a mayúsculas y minúsculas un string
console.log("4. Mayúsculas y minúsculas");
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
console.log("5. Cadena en varias líneas");
let multiLinea = `Esta es la línea 1
Esta es la línea 2
Esta es la línea 3`;
console.log(multiLinea);

// 6. Interpola el valor de una variable en un string
console.log("6. Interpolación de variables");
let nombre = " jose";
let saludo = `Hola, ${nombre}! Bienvenido al curso de JavaScript.`;
console.log(saludo);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("7. Reemplazo de espacios por guiones");
let fraseConEspacios = "JavaScript es un lenguaje de programación";
let fraseConGuiones = fraseConEspacios.replace(/ /g, "-");
console.log(fraseConGuiones);
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("8. Comprobación de palabra en cadena");
let palabraBuscada = "lenguaje";
let contienePalabra = fraseConEspacios.includes(palabraBuscada);
console.log(contienePalabra);

// 9. Comprueba si dos strings son iguales
console.log("9. Comparación de strings");
let string1 = "JavaScript";
let string2 = "javascript";
let sonIguales = string1 === string2;
console.log(sonIguales);

// 10. Comprueba si dos strings tienen la misma longitud
console.log("10. Comparación de longitud de strings");
let stringA = "Hola";
let stringB = "Mund";
let mismaLongitud = stringA.length === stringB.length;
console.log(mismaLongitud);
