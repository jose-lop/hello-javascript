/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
console.log("\n1. Crea un función que utilice error correctamente");
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 2);
  console.log("Resultado:", resultado);

  const error = dividir(10, 0);
  console.log(error);
} catch (error) {
  console.log("error:", error.message);
}

// 2. Crea una función que utilice warn correctamente
console.log("\n2. Crea una función que utilice warn correctamente");

function verificarStock(producto, cantidad) {
  if (cantidad < 5) {
    console.warn(`advertencia: quedan ${cantidad} unidades de ${producto}`);
  }
  return `stock de ${producto} :${cantidad} unidades`;
}

console.log(verificarStock("manzanas", 3));
console.log(verificarStock("naranjas", 10));

// 3. Crea una función que utilice info correctamente
console.log("\n3. Crea una función que utilice info correctamente");
function iniciarSesion(usuario) {
  console.info(`Información: el usuario ${usuario} inició sesión`);

  return `Bienvenido ${usuario}`;
}
console.log(iniciarSesion("toño"));

// 4. Utiliza table
console.log("\n4. Utiliza table");
const usuarios = [
  { nombre: "toño", edad: 39, pais: "colombia" },
  { nombre: "maria", edad: 25, pais: "mexico" },
  { nombre: "luis", edad: 30, pais: "españa" },
];
console.table(usuarios);
// 5. Utiliza group
console.log("\n5. Utiliza group");

console.group("Información de usuarios");
console.log("nombre: Toño");
console.log("edad: 39");
console.log("pais: colombia");
console.groupEnd();

// 6. Utiliza time
console.log("\n6. Utiliza time");

console.time("tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
  // Simulación de una tarea pesada
}
console.timeEnd("tiempo de ejecución");

// 7. Valida con assert si un número es positivo
console.log("\n7. Valida con assert si un número es positivo");

function validarNumero(numero) {
  console.assert(numero > 0, `Error: el numero ${numero} no es positivo`);
  console.log(`numero recibido: ${numero}`);
}
validarNumero(5);
validarNumero(-3);

// 8. Utiliza count
console.log("\n8. Utiliza count");
function saludar(nombre) {
  console.count("cantidad de saludos");
  console.log(`hola, ${nombre}`);
}
saludar("toño");
saludar("maria");
saludar("dany");
saludar("luis");
saludar("maria");

// 9. Utiliza trace
console.log("\n9. Utiliza trace");
function funcionA() {
  funcionB();
}
function funcionB() {
  funcionC();
}

function funcionC() {
  console.trace("traza de funciones");
}

funcionA();

// 10. Utiliza clear
console.log("\n10. Utiliza clear");

console.log("mensaje1");
console.log("mensaje2");
console.log("mensaje3");

//console.clear();

console.log("consola limpia");
