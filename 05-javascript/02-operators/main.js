/**
 * Operators
 *
 * JavaScript has several operators including:
 * - Arithmetic operators: +, -, *, /, %
 * - Assignment operators: =, +=, -=, *=, /=
 * - Comparison operators: ==, ===, !=, !==, >, <, >=, <=
 * - Logical operators: &&, ||, !
 *
 * Operators are used to perform operations on values and variables.
 */

/**
 * Arithmetic operators
 *
 * They are used to perform mathematical operations on numeric values.
 */

let x = 5;
let y = 10;

let addition = x + y;
console.log(addition);

let susbtraction = x - y;
console.log(susbtraction);

let multiplication = x * y;
console.log(multiplication);

let division = x / y; // This operation can result in an error if the divisor is zero.
console.log(division);

let modulus = x % y;
console.log(modulus);

/**
 * Assignment operators
 *
 * They are used to assign values to variables in a cumulative manner.
 * This means the variable is updated based on its current value and the
 * specified operation.
 */

let z = 5;

z += 3; // Equivalent to z = z + 3
console.log(z);

z -= 2; // Equivalent to z = z - 2
console.log(z);

z *= 4; // Equivalent to z = z * 4
console.log(z);

z /= 2; // Equivalent to z = z / 2
console.log(z);
