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

console.log("Easy level:");

/**
 * Paso 1: comparar 5 con 3 usando el operador "mayor que".
 * Paso 2: como 5 es mayor que 3, el resultado booleano es true.
 */
console.log(5 > 3); // true

/**
 * Paso 1: evaluar 10 <= 10 -> true (son iguales).
 * Paso 2: evaluar 4 > 5 -> false (4 no es mayor que 5).
 * Paso 3: unir con &&: true && false -> false (ambos deben ser true).
 */
console.log(10 <= 10 && 4 > 5); // false

/**
 * Paso 1: aplicar ! a true -> false.
 * Paso 2: evaluar 7 === 7 -> true (mismo valor y mismo tipo).
 * Paso 3: unir con ||: false || true -> true (basta con que uno sea true).
 */
console.log(!true || 7 === 7); // true

/**
 * Paso 1: comparar las cadenas carácter por carácter según su código Unicode.
 * Paso 2: "a" (97) va antes que "b" (98), por lo que "apple" es menor.
 * Paso 3: el resultado es true.
 */
console.log("apple" < "banana"); // true

console.log("Intermediate level:");
/**
 * Paso 1: 10 == "10" usa igualdad no estricta, así que "10" se convierte a 10 -> true.
 * Paso 2: 5 !== "5" usa desigualdad estricta y los tipos son distintos (number vs string) -> true.
 * Paso 3: unir con &&: true && true -> true.
 */
console.log(10 == "10" && 5 !== "5"); // true

/**
 * Paso 1: resolver el paréntesis: true && false -> false.
 * Paso 2: unir con ||: false || true -> true.
 * Paso 3: el resultado final es true.
 */
console.log((true && false) || true); // true

/**
 * Paso 1: dentro del paréntesis, 5 > 3 -> true, y !true -> false.
 * Paso 2: dentro del otro paréntesis, 2 <= 2 -> true.
 * Paso 3: 4 != "4" convierte "4" a 4 y compara -> false.
 * Paso 4: unir el segundo paréntesis: true && false -> false.
 * Paso 5: unir todo: false || false -> false.
 */
console.log(!(5 > 3) || (2 <= 2 && 4 != "4")); // false

/**
 * Paso 1: 0 == false convierte false a 0 -> 0 == 0 -> true.
 * Paso 2: "" == false convierte "" a 0 y false a 0 -> 0 == 0 -> true.
 * Paso 3: unir con &&: true && true -> true.
 */
console.log(0 == false && "" == false); // true

console.log("Advanced level:");
/**
 * Paso 1: null > 0 convierte null a 0 -> 0 > 0 -> false.
 * Paso 2: null < 0 -> 0 < 0 -> false.
 * Paso 3: null == 0 es false porque la igualdad con null no hace coerción numérica.
 * Paso 4: unir con ||: false || false || false -> false.
 */
console.log(null > 0 || null < 0 || null == 0); // false

/**
 * Paso 1: [] == false convierte [] a "" y luego a 0, y false a 0 -> 0 == 0 -> true.
 * Paso 2: [].length === 0 -> 0 === 0 -> true.
 * Paso 3: unir con &&: true && true -> true.
 */
console.log([] == false && [].length === 0); // true

/**
 * Paso 1: "5" > 3 convierte "5" a número -> 5 > 3 -> true.
 * Paso 2: "3" < "10" compara como texto: "3" va después de "1", así que es false.
 * Paso 3: unir con &&: true && false -> false.
 */
console.log("5" > 3 && "3" < "10"); // false

/**
 * Paso 1: NaN !== NaN es true porque NaN nunca es igual a sí mismo.
 * Paso 2: 0 / 0 produce NaN, y NaN === NaN es false.
 * Paso 3: unir con ||: true || false -> true.
 */
console.log(NaN !== NaN || 0 / 0 === NaN); // true

console.log("Legend level:");
/**
 * Paso 1: [] es un objeto truthy, por lo que ![] -> false.
 * Paso 2: ![] == ![] -> false == false -> true.
 * Paso 3: [] == ![] -> [] == false; [] se convierte a "" y luego a 0, y false a 0 -> true.
 * Paso 4: unir con &&: true && true -> true.
 */
console.log(![] == ![] && [] == ![]); // Cosa fea. true

/**
 * Paso 1: null >= 0 convierte null a 0 -> 0 >= 0 -> true.
 * Paso 2: null <= 0 -> 0 <= 0 -> true.
 * Paso 3: null == 0 es false (la igualdad con null no convierte a número).
 * Paso 4: unir con &&: true && true && false -> false.
 */
console.log(null >= 0 && null <= 0 && null == 0); // false

/**
 * Paso 1: !undefined -> true y !null -> true, así que true === true -> true.
 * Paso 2: undefined == null es true por la regla especial de igualdad no estricta.
 * Paso 3: undefined !== null es true porque son de tipos distintos.
 * Paso 4: unir con &&: true && true && true -> true.
 */
console.log(!undefined === !null && undefined == null && undefined !== null); // true
