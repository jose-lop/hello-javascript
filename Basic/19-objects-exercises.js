/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
console.log("1. Crea un objeto con 3 propiedades");
let car = {
  brand: "toyota",
  model: "fortuner",
  year: 2020,
};
console.log(car);

// 2. Accede y muestra su valor
console.log("2. Accede y muestra su valor");
console.log(car.brand);
console.log(car["model"]);
console.log(car.year);
// 3. Agrega una nueva propiedad
console.log("3. Agrega una nueva propiedad");
car.color = "red";
console.log(car);

// 4. Elimina una de las 3 primeras propiedades
console.log("4. Elimina una de las 3 primeras propiedades");
delete car.year;
console.log(car);

// 5. Agrega una función e invócala
console.log("5. Agrega una función e invócala");
car.start = function () {
  console.log("el coche ha arrancado");
};
car.start();
console.log(car);

// 6. Itera las propiedades del objeto
console.log("6. Itera las propiedades del objeto");
for (let key in car) {
  console.log(key + ":" + car[key]);
}

// 7. Crea un objeto anidado
console.log("7. Crea un objeto anidado");
let person = {
  name: "brais",
  age: 37,
  address: {
    street: "calle x",
    city: "a coruña",
    country: "spain",
  },
};
console.log(person);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("8. Accede y muestra el valor de las propiedades anidadas");
console.log(person.address.street);
console.log(person["address"]["city"]);
console.log(person.address.country);

// 9. Comprueba si los dos objetos creados son iguales
console.log("9. Comprueba si los dos objetos creados son iguales");
let car2 = {
  brand: "toyota",
  model: "fortuner",
  color: "red",
  start: function () {
    console.log("el coche ha arrancado");
  },
};
console.log(car);
console.log(car2);
console.log(car === car2);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("10. Comprueba si dos propiedades diferentes son iguales");
console.log(car.brand === car2.brand);
console.log(car.model === car2.model);
console.log(car.color === car2.color);
console.log(car.start === car2.start);
