/**
 * Asynchronism
 */

// Synchronous code

console.log("First")

function process() {
  console.log("Processing...")
}

process();
console.log("Last")

// Asynchronous code

  console.log("Start");

  setTimeout(() => {
    console.log("Operation completed");
  }, 2000);

  setTimeout(() => {
    console.log("Another operation completed");
  }, 1000);

  console.log("End");

/**
 * Event Loop, Call Stack y Queue
 *
 * - Event loop: JS Mechanism that handles asynchronous
 * operations.
 * - Call stack: The structure that keeps track of function calls.
 * - Queue: The structure that holds asynchronous callbacks to be executed.
 * -- Task Queue: The structure that holds tasks to be executed
 * after the current call stack is empty.
 * -- Microtask Queue: The structure that holds microtasks, such
 * as promises, to be executed after the current task completes
 * and before the next task from the task queue.
 */

console.log("1");

Task (Macrotask)
setTimeout(() => {
  console.log("2");
}, 0);

Microtask
Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

/**
 * Callbacks
 *
 * A callback is a function passed as an argument to another
 * function, which is then invoked inside the outer function to
 * complete some kind of routine or action.
 */

// Synchronous callback

function sayHello(name, callback) {
  console.log(`Hello, ${name}!`);

  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

sayHello("Nomar", sayGoodbye);

// Asynchronous callback

function getUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Nomar" };
    callback(user);
  }, 2000);
}

getUser((user) => {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
});

/**
 * Ejercicios:
 * 
 * Ejercicio 1.
 * Crea una función llamada `downloadFile(filename, callback)`
 * que simule la descarga de una archivo:
 * 1. Debe imprimir inmediatamente en consola: `Iniciando
 * descarga de <filename>`.
 * 2. Después de 2 segundos, debe ejecutar el callback pasándole
 * el mensaje: `Descarga completada: <filename>.
 * 3. Llama a la función y usa el callback para mostrar ese
 * mensaje final en consola.
 * 
 * Salida esperada:
 * Iniciando descarga de archivo.txt
 * Descarga completada: archivo.txt
 * 
 * Ejercicio 2.
 * Simula el proceso de preprarción de un café en tres pasos
 * secuenciales. Cada paso debe ser una función independiente
 * que reciba un callback:
 * 1. boilWater(callback): Tarda 2 segundos e imprime
 * "Agua hervida".
 * 2. grindCoffe(callback): Tarda 1.5 segundos e imprime
 * "Café molido".
 * 3. serveCoffe(callback): Tarda 1 segundo e imprime:
 * "Café listo para tomar".
 * Encadena las llamadas para que los pasos ocurran estrictamente
 * en ese orden.
 *
 * Salida esperada:
 * Agua hervida
 * Café molido
 * Café listo para tomar
 */

