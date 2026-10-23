/**
 * Javascript (JS)
 *
 * Is a programming language used for web development.
 * It can run in the browser natively or on the server with Node.js.
 *
 * When on Node.js, use the command on your terminal:
 *    node <filename.js>
 *
 * It is often used with HTML and CSS.
 * Can manipulate web page content.
 */

// Print a message to the console its done with the method:
// console.log()
console.log("Hello, World!");

/**
 * A method is an instrument used to perform certain actions.
 * Most methods uses arguments.
 * An argument is a value that will be used by the method to
 * perform those actions.
 *
 * In console.log(), the argument is the message to print.
 */

console.log("Welcome to JavaScript!");

/**
 * Variables
 *
 * Variables are used to store data in JavaScript.
 * They can be declared using var, let, or const.
 * - let: block-scoped variable, can be updated but not re-declared.
 * - var: acts in the same way as let, but is considered deprecated.
 * - const: block-scoped variable, cannot be updated or re-declared.
 */

let message = "Hello, JavaScript!";
console.log(message);

// Variables can change its value after being declared
// This is true for variables declared with let and var.
message = "Hello, again!";
console.log(message);

// Variables declared with const cannot be updated or re-declared.
const pi = 3.14;
console.log(pi);

// Trying to update a const variable will result in an error
// pi = 3.14159; // Uncommenting this line will throw an error

/**
 * Variables cover most cases.
 * Use let for values that will change and const for values that won't.
 * Avoid using var unless necessary for legacy code.
 */

/**
 * Data types
 *
 * JavaScript has several data types including:
 * - String: represents text, e.g., "Hello"
 * - Integer: represents numeric values, e.g., 42
 * - Float: represents decimal numbers, e.g., 3.14
 * - Boolean: represents true or false
 * - Object: represents complex data structures
 * - Array: represents a list of values
 * - Null: represents an empty value
 * - Undefined: represents a variable that has not been assigned a value
 */

let firstName = "John";
console.log(firstName);

let age = 30;
console.log(age);

let isStudent = true;
console.log(isStudent);

// In JS, variables follows the camelCase naming convention.
// It is desirable that the variable name describes its purpose clearly.
// This name must start with a letter, underscore (_), or dollar sign ($).
// Subsequent characters can also include numbers (0-9).

// We can print variables as part of a message using string concatenation
// or template literals.
console.log("My name is " + firstName + " and I am " + age + " years old.");
console.log(`My name is ${firstName} and I am ${age} years old.`);

/**
 * String concatenation uses the + operator to combine strings and variables.
 * Template literals use backticks (`) and ${} to embed variables directly.
 */
