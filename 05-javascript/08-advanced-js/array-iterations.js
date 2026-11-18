// Array Iterations in JavaScript

const numbers = [1, 2, 3, 4, 5];

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
  { name: "Keyboard", price: 100 },
  { name: "Mouse", price: 50 },
];

const people = ["Alice", "Bob", "Charlie", "David", "Eve"];

const ages = [18, 21, 25, 30, 35];

// forEach()
// Executes a provided function once for each array element.

let txt = "";
numbers.forEach((number) => {
  txt += `${number} `;
});
console.log(txt);

// map()
// Creates a new array populated with the results of calling a provided function on
// every element in the calling array.

const squared = numbers.map((number) => number ** 2);
console.log(numbers);
console.log(squared);

const expensiveProducts = products.filter((product) => product.price > 250);
console.log(expensiveProducts);

// find()
// Returns the value of the first element in the array that satisfies the provided testing
// function.

const eve = people.find((person) => person === "Eve");
console.log(eve);

// reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);
console.log(totalPrice);

// reduceRight()
// Executes a reducer function on each element of the array (from right-to-left),
// resulting in a single output value.

const totalPriceRight = products.reduceRight(
  (total, product) => total + product.price,
  0,
);
console.log(totalPriceRight);

// every()
// Tests whether all elements in the array pass the test implemented by the provided function.

const allOver18 = ages.every((age) => age >= 18);
console.log(allOver18);

// some()
// Tests whether at least one element in the array passes the test implemented
// by the provided function.

const someUnder25 = ages.some((age) => age < 25);
console.log(someUnder25);

// sort()
// Sorts the elements of an array in place and returns the sorted array.

const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);

const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);

// spread operator (...)
// The spread operator allows an iterable such as an array to be expanded in places where
// zero or more arguments (for function calls) or elements (for array literals) are expected.

// Usage case: Join arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// Usage case: Pass array elements as function arguments
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr1));

const button = (
  id,
  name,
  value = null,
  className,
  onClick,
  disabled = false,
) => {
  console.log(`Button ID: ${id}`);
  console.log(`Button Name: ${name}`);
  console.log(`Button Value: ${value}`);
  console.log(`Button Class: ${className}`);
  console.log(`Button Disabled: ${disabled}`);
  onClick();
};

const buttonAttributes = [
  "submitBtn",
  "Submit",
  null,
  "btn-primary",
  () => console.log("Button clicked!"),
  false,
];

button(...buttonAttributes);


// Ejercicios

/**
 * Devolver un mensaje indicando si aprueba o reprueba cada estudiante.
 * (Para aprobar, la nota debe ser mayor o igual a 60).
 */
const calificaciones = [45, 88, 92, 59, 74, 30, 100];

calificaciones.forEach((nota, index) => {
  if (nota >= 60) {
    console.log(`Estudiante ${index + 1}: Aprueba`);
  } else {
    console.log(`Estudiante ${index + 1}: Reprueba`);
  }
});

/**
 * Los siguientes productos aplican para un descuento del 15%.
 * Crea un nuevo array que contenga los precios con el descuento aplicado.
 */
const precios = [100, 250, 50, 400, 120];

const preciosConDescuento = precios.map((precio) => precio * 0.85);
console.log(preciosConDescuento);

/**
 * Para el siguiente stock de productos, crea un nuevo array compuesto únicamente por los
 * productos de la categoría tecnologia que cuesten menos de 500.
 */
const productos = [
  { nombre: "Laptop", categoria: "tecnologia", precio: 1200 },
  { nombre: "Camisa", categoria: "ropa", precio: 35 },
  { nombre: "Mouse", categoria: "tecnologia", precio: 25 },
  { nombre: "Pantalón", categoria: "ropa", precio: 50 },
  { nombre: "Monitor", categoria: "tecnologia", precio: 300 },
];

const productosFiltrados = productos.filter(
  (producto) => producto.categoria === "tecnologia" && producto.precio < 500
);
console.log(productosFiltrados);

/**
 * Encuentra al primer usuario cuyo rol sea admin.
 */
const usuarios = [
  { id: 1, nombre: "Ana", rol: "invitado" },
  { id: 2, nombre: "Carlos", rol: "editor" },
  { id: 3, nombre: "Beatriz", rol: "admin" },
  { id: 4, nombre: "David", rol: "admin" },
];

const primerAdmin = usuarios.find((usuario) => usuario.rol === "admin");
console.log(primerAdmin);

/**
 * Calcula el total del siguiente carrito de compras
 */
const carrito = [
  { producto: "Libro", precio: 15, cantidad: 2 },
  { producto: "Pluma", precio: 3, cantidad: 5 },
  { producto: "Cuaderno", precio: 7, cantidad: 3 },
];

const totalCarrito = carrito.reduce(
  (total, item) => total + item.precio * item.cantidad,
  0
);
console.log(totalCarrito);

// Prohibido usar: Ciclos for, while. ;)