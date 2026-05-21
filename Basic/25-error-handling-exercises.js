/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
console.log("1. Captura una excepción utilizando try-catch");
try {
  console.log(myObject.email);
} catch (error) {
  console.log("Error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("\n2. Captura una excepción utilizando try-catch y finally");
try {
  console.log(myObject.email);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Este bloque se ejecuta siempre");
}
console.log("\nejemplo 2 con finally sin error");
try {
  let resultado = 10 / 2;
  console.log("Resultado:", resultado);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Fin del programa");
}
// 3. Lanza una excepción genérica
console.log("\n3. Lanza una excepción genérica");
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}
try {
  console.log(dividir(100, 0));
} catch (error) {
  console.log("Error:", error.message);
}

// 4. Crea una excepción personalizada
console.log("\n4. Crea una excepción personalizada");
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
try {
  throw new CustomError("Este es un error personalizado");
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// 5. Lanza una excepción personalizada
console.log("\n5. Lanza una excepción personalizada");
function validarEdad(edad) {
  if (edad < 18) {
    throw new CustomError("La edad debe ser mayor o igual a 18");
  }
  return "Edad válida";
}
try {
  console.log(validarEdad(15));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// 6. Lanza varias excepciones según una lógica definida
console.log("\n6. Lanza varias excepciones según una lógica definida");
function validarNumero(num) {
  if (typeof num !== "number") {
    throw new CustomError("El valor debe ser un número");
  }
  if (num < 0) {
    throw new CustomError("El número no puede ser negativo");
  }
  if (num > 100) {
    throw new CustomError("El número no puede ser mayor a 100");
  }
  return "Número válido";
}
try {
  console.log(validarNumero("abc"));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}
try {
  console.log(validarNumero(-5));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}
try {
  console.log(validarNumero(150));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}
try {
  console.log(validarNumero(50));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
console.log("\n7. Captura varias excepciones en un mismo try-catch");
try {
  console.log(validarNumero("abc"));
  console.log(validarNumero(-5));
  console.log(validarNumero(150));
  console.log(validarNumero(50));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log(
  "\n8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores",
);
const valores = ["3.14", "abc", "2.718", "xyz", "1.618"];
for (let valor of valores) {
  try {
    let numero = parseFloat(valor);
    if (isNaN(numero)) {
      throw new Error("No es un número válido");
    }
    console.log("Número:", numero);
  } catch (error) {
    console.log("Error al convertir:", valor);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log(
  "\n9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada",
);

// Clase de error personalizada
class PropertyError extends Error {
  constructor(message) {
    super(message);
    this.name = "PropertyError";
  }
}

function verificarPropiedad(obj, propiedad) {
  if (!obj.hasOwnProperty(propiedad)) {
    throw new PropertyError(`El objeto no tiene la propiedad "${propiedad}"`);
  }

  return `La propiedad "${propiedad}" existe en el objeto`;
}

// Caso donde NO existe la propiedad
try {
  console.log(verificarPropiedad({ name: "Alice", age: 30 }, "email"));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// Caso donde SÍ existe la propiedad
try {
  console.log(verificarPropiedad({ name: "Alice", age: 30 }, "name"));
} catch (error) {
  console.log("Error:", error.name, "-", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log(
  "\n10. Crea una función que realice reintentos en caso de error hasta un máximo de 10",
);

function funcionConError() {
  if (Math.random() < 0.7) {
    throw new Error("Error aleatorio");
  }
  return "Éxito";
}

function reintentarFuncion(maxIntentos) {
  let intentos = 0;
  while (intentos < maxIntentos) {
    try {
      const resultado = funcionConError();
      console.log(resultado);
      return;
    } catch (error) {
      console.log(`Intento ${intentos + 1} fallido: ${error.message}`);
      intentos++;
    }
  }
  console.log("Se alcanzó el máximo de intentos sin éxito");
}

reintentarFuncion(10);
