/**
 * Asynchronism
 */

// Synchronous code

// console.log("First")

// function process() {
//   console.log("Processing...")
// }

// process();
// console.log("Last")

// Asynchronous code

// console.log("Start");

// setTimeout(() => {
//   console.log("Operation completed");
// }, 2000);

// setTimeout(() => {
//   console.log("Another operation completed");
// }, 1000);

// console.log("End");

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

// console.log("1");

// Task (Macrotask)
// setTimeout(() => {
//   console.log("2");
// }, 0);

// Microtask
// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");

/**
 * Callbacks
 *
 * A callback is a function passed as an argument to another
 * function, which is then invoked inside the outer function to
 * complete some kind of routine or action.
 */

// Synchronous callback

// function sayHello(name, callback) {
//   console.log(`Hello, ${name}!`);

//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// sayHello("Nomar", sayGoodbye);

// Asynchronous callback

// function getUser(callback) {
//   setTimeout(() => {
//     const user = { id: 1, name: "Nomar" };
//     callback(user);
//   }, 2000);
// }

// getUser((user) => {
//   for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
//   }
// });

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

/**
 * Promises
 *
 * A promise is an object representing the eventual completion or
 * failure of an asynchronous operation. It has three states:
 * - Pending: Initial state, neither fulfilled nor rejected.
 * - Fulfilled: The operation completed successfully.
 * - Rejected: The operation failed.
 *
 * Promises provide `then` and `catch` methods to handle success
 * and failure, respectively.
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Operation completed successfully");
//     } else {
//       reject("Operation failed");
//     }
//   }, 2000);
// });

// promise.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error(error);
// }).finally(() => {
//   console.log("Operation finished");
// });

function getUserPromise() {
  return Promise.resolve({ id: 1, name: "Gabriel" });
}

// function getOrdersPromise(userId) {
//   return Promise.resolve([
//     { id: 1, item: "Laptop", user: userId },
//     { id: 2, item: "Phone", user: userId },
//   ]);
// }

// getUserPromise()
//   .then((user) => {
//     console.log(user);
//     return getOrdersPromise(user.id);
//   })
//   .then((orders) => {
//     console.log(orders);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Process finished");
//   });

// fetch
// The fetch API is used to make network requests and returns a promise.

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const USERS_URL = `${JSON_PLACEHOLDER_URL}/users`;
const POSTS_URL = `${JSON_PLACEHOLDER_URL}/posts`;

// const users = fetch(USERS_URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const users = fetch(USERS_URL);
const posts = fetch(POSTS_URL);

const promises = [users, posts];

Promise.all(promises)
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    const [usersData, postsData] = data;
    console.log("Users:", usersData[0]);
    console.log("Posts:", postsData[0]);
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Promises Statics methods
 *
 * - promise.all(): Takes an array of promises and returns a single promise
 *   that resolves when all of the promises in the array have resolved,
 *   or rejects if any of the promises reject.
 * - promise.race(): Takes an array of promises and returns a single promise
 *   that resolves or rejects as soon as one of the promises in the array
 *   resolves or rejects.
 * - promise.allSettled(): Takes an array of promises and returns a single promise
 *   that resolves when all of the promises have settled (either fulfilled or rejected),
 *   with an array of objects describing the outcome of each promise.
 * - promise.any(): Takes an array of promises and returns a single promise
 *   that resolves as soon as any of the promises in the array resolve,
 *   or rejects if all of the promises reject.
 * - promise.resolve(): Returns a promise that is resolved with a given value.
 * - promise.reject(): Returns a promise that is rejected with a given reason.
 */

/**
 * Ejercicios
 * 
 * Ejercicio 1: Realiza las siguientes operaciones:
 * 1. Obtén la lista de usuarios desde la API de JSONPlaceholder.
 * (URL https://jsonplaceholder.typicode.com/users)
 * 2. Convierte la respuesta a formato JSON.
 * 3. Filtra el array para obtener solo los usuarios cuya
 * propiedad .address.city sea "Gwenborough".
 * 4. Muestra en la consola el nombre y el email de dicho usuario.
 */

const URL = "https://jsonplaceholder.typicode.com/users";