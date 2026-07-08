/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
console.log("Ejercicio 1: Función que retorna otra función");
function funcion1(name) {
  function funcion2() {
    console.log(`Hola, ${name}`);
  }
  return funcion2;
}

const miFuncion = funcion1("TOÑO");
miFuncion();

// 2. Implementa una función currificada que multiplique 3 números
// Una función currificada (curried function)
// es una función que no recibe  todos sus argumentos de una vez,
// sino uno a la vez, devolviendo una nueva función hasta obtener todos los argumentos necesarios.
console.log("Ejercicio 2: Función currificada que multiplica 3 números");

function multiplicar(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const resultado = multiplicar(2)(4)(6);
console.log(resultado); // Output: 48

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
// esta función usa recursividad, es decir, una función que se llama a sí misma.
console.log(
  "Ejercicio 3: Función recursiva que calcula la potencia de un número elevado a un exponente",
);

function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3)); // Output: 8

// 4. Crea una función createCounter() que reciba un valor inicial y
// retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log(
  "Ejercicio 4: Función createCounter() que retorna un objeto con métodos para incrementar, decrementar y obtener el valor",
);

function createCounter(valorInicial) {
  let contador = valorInicial;
  return {
    increment() {
      contador++;
    },
    decrement() {
      contador--;
    },
    getValue() {
      return contador;
    },
  };
}

console.log(createCounter(5).getValue()); // Output: 5
console.log(createCounter(5).increment()); // Output: undefined
console.log(createCounter(5).decrement()); // Output: undefined

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que
// primero sume todos los números (usando parámetros Rest) y
// luego multiplique el resultado por multiplier
console.log(
  "Ejercicio 5: Función sumManyTimes(multiplier, ...numbers) que suma todos los números y multiplica el resultado por multiplier",
);

function sumManyTimes(Multiplier, ...numbers) {
  const suma = numbers.reduce((acc, num) => acc + num, 0);
  return suma * Multiplier;
}

const resultado2 = sumManyTimes(2, 1, 2, 3, 4);
console.log(resultado2); // Output: 20

// 6. Crea un Callback que se invoque con el resultado de la suma de
// todos los números que se le pasan a una función
console.log(
  "Ejercicio 6: Callback que se invoca con el resultado de la suma de todos los números",
);

function sumar(callback, ...numbers) {
  const suma = numbers.reduce((acc, num) => acc + num, 0);
  callback(suma);
}

const callback = (resultado) => {
  console.log(`El resultado de la suma es: ${resultado}`);
};
sumar(callback, 10, 20, 30);

// 7. Desarrolla una función parcial
console.log("Ejercicio 7: Función parcial");
function parcial(a) {
  return function (b) {
    return a + b;
  };
}

const sumaParcial = parcial(5);
console.log(sumaParcial(10)); // Output: 15

// 8. Implementa un ejemplo que haga uso de Spread
console.log("Ejercicio 8: Ejemplo que hace uso de Spread");
//Spread (...): 📤 Expande un arreglo y saca sus elementos uno por uno.
function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [5, 20, 30];
const resultadoSuma = sumar(...numeros);
console.log(resultadoSuma); // Output: 55

// 9. Implementa un retorno implícito
console.log("Ejercicio 9: Retorno implícito");
//Regla fácil de recordar
//✅ Sin llaves {} → retorno implícito (no escribes return).
//✅ Con llaves {} → debes escribir return si quieres devolver un valor.
const multiplicar1 = (a, b) => a * b;
console.log(multiplicar1(5, 10)); // Output: 50

const cuadrado = (numero) => numero * numero;
console.log(cuadrado(5)); // Output: 25

// 10. Haz uso del this léxico
console.log("Ejercicio 10: Uso del this léxico");

const persona = {
  nombre: "jose",

  saludar() {
    const mostrarNombre = () => {
      console.log(`hola, ${this.nombre}`);
    };
    mostrarNombre();
  },
};
persona.saludar(); // Output: hola, jose
