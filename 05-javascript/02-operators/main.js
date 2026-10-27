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

/**
 * Comparison operators
 *
 * They are used to compare values and return a boolean result (true or false).
 * ==, ===, !=, !==, >, <, >=, <=
 */

let a = 25;
let b = 30;
let c = "25"; // String

// Loose Equality (==)
console.log("Loose Equality (==):");
console.log(a == b);
console.log(a == c);

// Strict Equality (===)
console.log("Strict Equality (===):");
console.log(a === b);
console.log(a === c);

// Not Equal (!=)
console.log("Not Equal (!=):");
console.log(a != b);
console.log(a != c);

// Strict Not Equal (!==)
console.log("Strict Not Equal (!==):");
console.log(a !== b);
console.log(a !== c);

// Greater Than (>)
console.log("Greater Than (>):");
console.log(a > b);
console.log(a > c);

// Less Than (<)
console.log("Less Than (<):");
console.log(a < b);
console.log(a < c);

// Greater Than or Equal To (>=)
console.log("Greater Than or Equal To (>=):");
console.log(a >= b);
console.log(a >= c);

// Less Than or Equal To (<=)
console.log("Less Than or Equal To (<=):");
console.log(a <= b);
console.log(a <= c);

/**
 * Logical operators
 *
 * They are used to combine multiple boolean expressions.
 * && (AND), || (OR), ! (NOT)
 */

let p = true;
let q = false;

// AND (&&)
// Returns true if all operands are true; false otherwise.
console.log("AND (&&):");
console.log(p && q);

// OR (||)
// Returns true if at least one operand is true; false otherwise.
console.log("OR (||):");
console.log(p || q);

// NOT (!)
// Returns the opposite boolean value of the operand.
console.log("NOT (!):");
console.log(!p);

// Combining logical operators
console.log("Combining logical operators:");
console.log(p && (q || !p));

/**
 * Logical operators priority:
 * 1. ! (NOT)
 * 2. && (AND)
 * 3. || (OR)
 */

/**
 * Try and guess the result of the following expressions WITHOUT
 * executing the code:
 */

// Easy level:
console.log("Easy level:");
console.log(5 > 3); // true
console.log(10 <= 10 && 4 > 5); // false
console.log(!true || 7 === 7); // true 
console.log("apple" < "banana"); // true

// Intermediate level:
console.log("Intermediate level:");
console.log(10 == "10" && 5 !== "5"); // true
console.log((true && false) || true); // true
console.log(!(5 > 3) || (2 <= 2 && 4 != "4")); // false
console.log(0 == false && "" == false); // true

// Advanced level:
console.log("Advanced level:");
console.log(null > 0 || null < 0 || null == 0); // false
console.log([] == false && [].length === 0); // true
console.log("5" > 3 && "3" < "10"); // false
console.log(NaN !== NaN || 0 / 0 === NaN); // true

// Legend level:
console.log("Legend level:");
console.log(![] == ![] && [] == ![]); // Cosa fea. true
console.log(null >= 0 && null <= 0 && null == 0); // false
console.log(!undefined === !null && undefined == null && undefined !== null); // true
