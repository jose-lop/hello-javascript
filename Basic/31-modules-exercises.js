/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
console.log("Ejercicio 1: Exporta una función-----------");
export function saludar(nombre) {
  return `hola ${nombre}`;
}

console.log(saludar("Toño"));
// 2. Exporta una constante
console.log("Ejercicio 2: Exporta una constante--");
export const PI = 3.1416;
console.log(PI);

// 3. Exporta una clase
console.log("Ejercicio 3: Exporta una clase------------------");
export class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `hola soy ${this.nombre} y tengo ${this.edad} años`;
  }
}
const usuario = new persona("Toño", 39);
console.log(usuario.saludar());

// 4. Importa una función
console.log("Ejercicio 4: Importa una función------------------");
// 4. Importa una función

import { add } from "./28-export-modules.js";

console.log(add(5, 3));

// 5. Importa una constante
console.log("Ejercicio 5: Importa una constante------------------");
import { name } from "./28-export-modules.js";

console.log(name);

// 6. Importa una clase
console.log("Ejercicio 6: Importa una clase------------------");
import { Circle } from "./28-export-modules.js";

const circle = new Circle(5);
console.log(circle.area());
console.log(circle.perimeter());

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
console.log(
  "Ejercicio 7: Exporta una función, una constante y una clase por defecto------------------",
);

export default class DefaultClass {
  constructor() {
    this.name = "Clase por defecto";
  }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
console.log(
  "Ejercicio 8: Importa una función, una constante y una clase por defecto------------------",
);

import DefaultClass from "./16-functions.js";

const defaultClassInstance = new DefaultClass();
console.log(defaultClassInstance.name);

// 9. Exporta una función, una constante y una clase desde una carpeta
console.log(
  "Ejercicio 9: Exporta una función, una constante y una clase desde una carpeta------------------",
);

export function multiply(a, b) {
  return a * b;
}

export const EULER = 2.7183;

export class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
console.log(
  "Ejercicio 10: Importa una función, una constante y una clase desde un directorio diferente al anterior------------------",
);
import { multiply, EULER, Square } from "./31-modules-exercises.js";

console.log(multiply(5, 3));
console.log(EULER);
const square = new Square(4);
console.log(square.area());
