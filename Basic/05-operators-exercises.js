/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

// Valores base
let a = 10;
let b = 3;

// Suma
let suma = a + b;

// Resta
let resta = a - b;

// Multiplicación
let multiplicacion = a * b;

// División
let division = a / b;

// Módulo (resto de la división)
let modulo = a % b;

// Incremento
let incremento = a;
incremento++;

// Decremento
let decremento = a;
decremento--;
console.log(
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  incremento,
  decremento
);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
// Asignación
let asignacion = a;
asignacion = b;

// Suma y asignación (+=)
let sumaAsignacion = a;
sumaAsignacion += b; // a = a + b

// Resta y asignación (-=)
let restaAsignacion = a;
restaAsignacion -= b; // a = a - b

// Multiplicación y asignación (*=)
let multiplicacionAsignacion = a;
multiplicacionAsignacion *= b; // a = a * b

// División y asignación (/=)
let divisionAsignacion = a;
divisionAsignacion /= b; // a = a / b

// Módulo y asignación (%=)
let moduloAsignacion = a;
moduloAsignacion %= b; // a = a % b
console.log(
  asignacion,
  sumaAsignacion,
  restaAsignacion,
  multiplicacionAsignacion,
  divisionAsignacion,
  moduloAsignacion
);

//* 3. Imprime 5 *//console.log("comparaciones verdaderas") /*con diferentes operadores de comparación*/

console.log(5 == "5"); // true (igualdad)
console.log(5 === 5); // true (igualdad estricta)
console.log(10 != 5); // true (diferente)
console.log(8 > 3); // true (mayor que)
console.log(4 <= 4); // true (menor o igual)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("comparaciones falsas");

console.log(10 < 5); // false
console.log(3 > 8); // false
console.log(7 === "7"); // false (comparación estricta)
console.log(4 >= 9); // false
console.log(6 != 6); // false

// 5. Utiliza el operador lógico and
console.log("Operador lógico and");

let edad = 25;
let tieneLicencia = true;

let puedeConducir = edad >= 18 && tieneLicencia === true;
console.log(puedeConducir); // true

// 6. Utiliza el operador lógico or
console.log("Operador lógico or");

let esFinDeSemana = false;
let esVacaciones = true;

let puedeRelajarse = esFinDeSemana || esVacaciones;
console.log(puedeRelajarse); // true
// 7. Combina ambos operadores lógicos
console.log("Combinación de operadores lógicos");

console.log((5 > 3 && 8 > 6) || 2 > 10); // true
console.log(10 < 5 || (3 === 3 && 4 < 6)); // true
console.log((7 > 10 && 5 > 1) || 9 === 9); // true
console.log((4 < 2 && 6 === 6) || 8 > 3); // true
console.log((1 > 5 && 2 > 3) || 6 !== 7); // true

// 8. Añade alguna negación
console.log("Negación lógica");

console.log(!(5 > 3)); // false
console.log(!(2 === 2)); // false
console.log(!(8 < 4)); // true
console.log(!(10 !== 10)); // true
console.log(!(3 >= 1)); // false

console.log(!true); // false
console.log(!(5 > 10)); // true
console.log(!(3 === 3)); // false
console.log(!(8 < 2 && 4 > 1)); // true
console.log(!(false || true)); // false

// 9. Utiliza el operador ternario
console.log("Operador ternario");

let numero = 7;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
console.log(resultado); // Impar

let edadPersona = 20;
let esAdulto = edadPersona >= 18 ? "Es adulto" : "No es adulto";
console.log(esAdulto); // Es adulto

let temperatura = 30;
let clima = temperatura > 25 ? "Hace calor" : "Hace frío";
console.log(clima); // Hace calor

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Combinación de operadores");

let x = 15;
let y = 4;

let esMayorYPar = x > y && x % 2 === 0;
console.log(esMayorYPar); // false

let sumaXY = x + y;
let esSumaMayor10 = sumaXY > 10 || sumaXY < 5;
console.log(esSumaMayor10); // true

let diferenciaXY = x - y;
let esDiferenciaPositiva = diferenciaXY >= 0 ? true : false;
console.log(esDiferenciaPositiva); // true

let productoXY = x * y;
let esProductoMultiploDe3 = productoXY % 3 === 0 && productoXY > 20;
console.log(esProductoMultiploDe3); // true

let divisionXY = x / y;
let esDivisionMayor2 = divisionXY > 2 || divisionXY < 1;
console.log(esDivisionMayor2); // true
