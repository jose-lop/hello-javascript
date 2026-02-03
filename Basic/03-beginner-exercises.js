/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// comentario de una línea

// 2. Escribe un comentario en varias líneas
/* comentario
en varias 
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let variableString = "hola";
let variableNumber = 45;
let variableBolean = true;
let variablenull = null;
let variableUndefine = undefined;
let variableSymbol = Symbol("mi simbolo");
let variableBigInt = 9007199254741991n;

// 4. Imprime por consola el valor de todas las variables
console.log(variableString);
console.log(variableNumber);
console.log(variableBolean);
console.log(variablenull);
console.log(variableUndefine);
console.log(variableSymbol);
console.log(variableBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof variableString);
console.log(typeof variableNumber);
console.log(typeof variableBolean);
console.log(typeof variablenull);
console.log(typeof variableUndefine);
console.log(typeof variableSymbol);
console.log(typeof variableBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
variableString = "adios";
variableNumber = 85;
variableBolean = false;
variablenull = null;
variableUndefine = undefined;
variableSymbol = Symbol("otro simbolo");
variableBigInt = 1234567890123456n;
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
variableString = 100;
variableNumber = "cincuenta";
variableBolean = "true";
variablenull = false;
variableUndefine = 25;
variableSymbol = null;
variableBigInt = "9007199254741991";
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constanteString = "constante hola";
const constanteNumber = 30;
const constanteBolean = true;
const constanteNull = null;
const constanteUndefine = undefined;
const constanteSymbol = Symbol("constante simbolo");
const constanteBigInt = 12345678901234567n;

// 9. A continuación, modifica los valores de las constantes
// constanteString = "nuevo valor"
// constanteNumber = 50
// constanteBolean = false
// constanteNull = "no es null"
// constanteUndefine = "ahora tiene valor"
// constanteSymbol = Symbol("nuevo simbolo")
// constanteBigInt = 76543210987654321n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas que producen error son las que intentan modificar las constantes
// ya que las constantes no pueden ser reasignadas una vez definidas.cle
