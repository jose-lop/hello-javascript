/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
console.log(
  "1. Usa desestructuración para extraer los dos primeros elementos de un array",
);
const myArray = [10, 20, 30, 40];
let [first, second] = myArray;
console.log("first:", first);
console.log("second:", second);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log(
  "2. Usa desestructuración en un array y asigna un valor predeterminado a una variable",
);
let [first2, second2, third2 = 100] = myArray;
console.log("first2:", first2);
console.log("second2:", second2);
console.log("third2 (default):", third2);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log(
  "3. Usa desestructuración para extraer dos propiedades de un objeto",
);
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
let { name, age } = person;
console.log("name:", name);
console.log("age:", age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log(
  "4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes",
);
let { name: personName, age: personAge } = person;
console.log("personName:", personName);
console.log("personAge:", personAge);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log(
  "5. Usa desestructuración para extraer dos propiedades de un objeto anidado",
);
const user = {
  username: "jose123",
  details: {
    email: "jose123@example.com",
    phone: "123-456-7890",
  },
};

let {
  username,
  details: { email, phone },
} = user;
console.log("username:", username);
console.log("email:", email);
console.log("phone:", phone);

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("6. Usa propagación para combinar dos arrays en uno nuevo");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log("Combined Array:", combinedArray);

// 7. Usa propagación para crear una copia de un array
console.log("7. Usa propagación para crear una copia de un array");
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("8. Usa propagación para combinar dos objetos en uno nuevo");
const o1 = { a: 1, b: 2 };
const o2 = { c: 3, d: 4 };
const combinedObject = { ...o1, ...o2 };
console.log("Combined Object:", combinedObject);

// 9. Usa propagación para crear una copia de un objeto
console.log("9. Usa propagación para crear una copia de un objeto");
const origObj = { x: 10, y: 20 };
const copiedObj = { ...origObj };
console.log("Original Object:", origObj);
console.log("Copied Object:", copiedObj);

// 10. Combina desestructuración y propagación
console.log("10. Combina desestructuración y propagación");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const { a, b } = obj1;
const combinedObj = { a, b, ...obj2 };
console.log("Combined Object with Destructuring and Spreading:", combinedObj);
