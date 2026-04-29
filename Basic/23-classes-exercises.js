/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
console.log("1. Crea una clase que reciba dos propiedades");

class MyClase {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}

let myInstance = new MyClase("Hello", "World");
console.log(myInstance);

// 2. Añade un método a la clase que utilice las propiedades
console.log("2. Añade un método a la clase que utilice las propiedades");

class MyClaseConMetodo {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  metodo() {
    return `"bienvenidos ${this.prop1} ${this.prop2}"`;
  }
}

let myInstanceConMetodo = new MyClaseConMetodo("Hello", "World");
console.log(myInstanceConMetodo.metodo());

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    return `Hola! ${this.nombre} ${this.apellido}`;
  }
}
console.log("Ejercicio Persona");

let persona1 = new Persona("jose", "lopez");
console.log(persona1);
console.log(persona1.saludar());

// 3. Muestra los valores de las propiedades e invoca a la función
console.log("3. Muestra los valores de las propiedades e invoca a la función");

console.log(myInstanceConMetodo.prop1);
console.log(myInstanceConMetodo.prop2);
console.log(myInstanceConMetodo.metodo());

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.saludar());
// 4. Añade un método estático a la primera clase
console.log("4. Añade un método estático a la primera clase");

class persona2 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    return `Hola! ${this.nombre} ${this.apellido}`;
  }
  static despedirse() {
    return "Adiós!";
  }
}

let persona3 = new persona2("José", "López");

console.log(persona3.saludar());
console.log(persona2.despedirse());

// 5. Haz uso del método estático
console.log("5. Haz uso del método estático");

console.log(persona2.despedirse());

// 6. Crea una clase que haga uso de herencia
console.log("6. Crea una clase que haga uso de herencia");

class animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  sonido() {
    return "El animal emite un sonido genérico";
  }
}

class perro extends animal {
  sonido() {
    return "Guau!";
  }
  correr() {
    return "El perro corre";
  }
}
console.log("Ejercicio Herencia");

let miPerro = new perro("MoureDog");
console.log(miPerro);
console.log(miPerro.correr());
console.log(miPerro.sonido());

// 7. Crea una clase que haga uso de getters y setters
console.log("7. Crea una clase que haga uso de getters y setters");

class persona5 {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(nuevoApellido) {
    this._apellido = nuevoApellido;
  }
}

let Persona5 = new persona5("José", "López");
console.log(Persona5.nombre);
console.log(Persona5.apellido);
Persona5.nombre = "Juan";
Persona5.apellido = "Pérez";
console.log(Persona5.nombre);
console.log(Persona5.apellido);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log(
  "8. Modifica la clase con getters y setters para que use propiedades privadas",
);

class GetSetPerson {
  #bank;

  constructor(name, age, company, bank) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.#bank = bank;
  }

  get bank() {
    return this.#bank;
  }

  set bank(bank) {
    this.#bank = bank;
  }
}

let person4 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789");

console.log(person4.bank);

person4.bank = "new IBAN123456789";

console.log(person4.bank);

// 9. Utiliza los get y set y muestra sus valores
console.log("9. Utiliza los get y set y muestra sus valores");

console.log(person4.bank);

person4.bank = "new IBAN123456789";

console.log(person4.bank);

// 10. Sobrescribe un método de una clase que utilice herencia
console.log("10. Sobrescribe un método de una clase que utilice herencia");

class gato extends animal {
  sonido() {
    return "Miau!";
  }
}

let miGato = new gato("MoureCat");
console.log(miGato);
console.log(miGato.sonido());
