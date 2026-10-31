/**
 * Functions
 *
 * Functions are reusable code blocks designed to perform
 * particular task.
 *
 * function base structure:
 * function functionName(parameters) {
 *   // code to be executed
 *  return value; // optional, depending on the function's purpose
 * }
 *
 * ! Parameter are also optional.
 */

function sayHello() {
  console.log("Hello!");
}

function sayHelloWithReturn() {
  return "Hello with return!";
}

function sumTwoValues(a, b) {
  return a + b;
}

sayHello();

let hello = sayHelloWithReturn();
console.log(hello);

let sum = sumTwoValues(5, 5);
console.log(sum);

sum = sumTwoValues(15, 45);
console.log(sum);

function validateString(str) {
  return typeof str === "string" && str.length > 0;
}

console.log(validateString("Hello"));
console.log(validateString(""));
console.log(validateString(123));

// Arrow function | unnamed function

const sayHelloArrow = () => {
  console.log("Hello from arrow function!");
};

sayHelloArrow();


/**
 * Classes
 *
 * Classes are blueprints for creating objects with specific
 * properties and methods.
 *
 * class base structure:
 * class ClassName {
 *   constructor(parameters) {
 *     // code to initialize object properties
 *   }
 *
 *   methodName() {
 *     // code for the method
 *   }
 * }
 */

class Animal {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  run() {
    console.log(`${this.name} is running!`);
  }
}


class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed)
    this.agesInDogYears = age * 7;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }
}

class Cat extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
  }

  meow() {
    console.log(`${this.name} is meowing!`);
  }
}

const myDog = new Dog("Firulai", 3, "Golden Retriever");
console.log(myDog);
myDog.bark();
myDog.run();

const otherDog = new Dog("Buddy", 2, "Labrador");
console.log(otherDog);
otherDog.bark();
otherDog.run();

const myCat = new Cat("Whiskers", 2, "Siamese");
console.log(myCat);
myCat.meow();
myCat.run();

const otherCat = new Cat("Luna", 3, "Persian");
console.log(otherCat);
otherCat.meow();
otherCat.run();