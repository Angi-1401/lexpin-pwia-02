/**
 * Conditionals
 *
 * They are control structures that allow you to execute
 * different code based on certain conditions.
 *
 * Examples include if, else if, else, and switch statements.
 *
 * Basic conditional statement usage:
 *
 * if (condition) {
 *     // code to execute if condition is true
 * }
 * else if (anotherCondition) {
 *     // code to execute if anotherCondition is true
 * }
 * else {
 *     // code to execute if none of the above conditions are true
 * }
 *
 * Basic switch statement usage:
 * switch (expression) {
 *     case value1:
 *         // code to execute if expression === value1
 *         break;
 *     case value2:
 *         // code to execute if expression === value2
 *         break;
 *     default:
 *         // code to execute if none of the above cases match
 * }
 */

console.log("Starting conditionals example:");

if (true) {
  console.log("Condition is true");
}

console.log("This will always run");

console.log("If statement:");

let age = 17;

if (age >= 18) {
  console.log("Access granted.");
}

console.log("If-Else statement:");

if (age >= 18) {
  console.log("Access granted."); // Executes if true
} else {
  console.log("Access denied."); // Executes if false
}

console.log("If-ElseIf-Else statement:");

if (age >= 18) {
  console.log("Access granted.");
} else if (age >= 16) {
  console.log("Access granted with parental consent.");
} else {
  console.log("Access denied.");
}

console.log("If-ElseIf-Else statement (with many conditions):");

// Classify by age group
// <1, 1-4, 5-12, 13-17, 18-24, 25-34, 35-44, 45-54, 55+
if (age < 1) {
  console.log("Infant");
} else if (age >= 1 && age <= 4) {
  console.log("Toddler");
} else if (age >= 5 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 17) {
  console.log("Teenager");
} else if (age >= 18 && age <= 24) {
  console.log("Young Adult");
} else if (age >= 25 && age <= 34) {
  console.log("Adult");
} else if (age >= 35 && age <= 44) {
  console.log("Middle-aged Adult");
} else if (age >= 45 && age <= 54) {
  console.log("Mature Adult");
} else {
  console.log("Senior");
}

console.log("Switch statement:");

const fruit = "Watermelon";

switch (fruit) {
  case "Passion Fruit":
    console.log("Passion fruit are $ 1.50");
    break;
  case "Mango":
    console.log("Mangoes are $ 2.00");
    break;
  case "Pineapple":
    console.log("Pineapples are $ 3.00");
    break;
  default:
    console.log("Fruit not available");
    break;
}

/**
 * Switch has the advantage of handling multiple discrete values
 * for a single expression.
 * Unlike if-else-if statements, switch evaluates the expression
 * once and compares it against each case value.
 * 
 * Writing a Switch statement involves knowing beforehand the
 * possible values that the expression can take.
 * 
 * It is often used as an alternative to multiple if-else-if
 * statements when comparing the same variable.
 * This last thing is important:
 */

/**
 * Scope
 * 
 * Scope refers to the accessibility of variables and functions
 * in different parts of the code.
 * JavaScript has function scope and block scope.
 * Variables declared with var have function scope.
 */

console.log("Scope Demostration")

let blockScopedVariable = "I am block scoped";
let blockScopedVariableInsideBlock;

if (true) {
  blockScopedVariableInsideBlock = "I am inside the block";
  blockScopedVariable = "I was changed inside the block";
  console.log(`1. ${blockScopedVariableInsideBlock}`);
}

console.log(`2. ${blockScopedVariable}`);
console.log(`3. ${blockScopedVariableInsideBlock}`);

/**
 * Ejercicio 1:
 * Crear un validador de transacciones.
 * 
 * 1. Declara una variable globalBalance que represente el saldo
 * disponible y una variable transactionAmount que represente
 * el monto de la transacción.
 * 2. Crea un bloque condicional if que verifique si el saldo
 * es suficiente para efectuar la transacción.
 * 2.1. Si el saldo es suficiente, resta el monto de la
 * transacción del saldo y muestra un mensaje de éxito con el 
 * nuevo saldo.
 * 2.2. Si el saldo no es suficiente, muestra un mensaje de error
 * indicando que no hay fondos suficientes.
*/

let globalBalance = 100;
let transactionAmount = 50;

if (globalBalance >= transactionAmount) {
  globalBalance -= transactionAmount;
  console.log(`Transaction successful. New balance: $${globalBalance}`);
} else {
  console.log("Transaction failed. Insufficient funds.");
}

/**
 * Ejercicio 2:
 * Calcular el precio del estacionamiento según el tipo de
 * vehículo.
 * 
 * 1. Declara una variable vehicleType que represente el
 * tipo de vehículo ("CARRO", "MOTO", "CAMIÓN"), y
 * una variable hours que represente las horas de estacionamiento.
 * 2. Crea un switch que determine el precio del estacionamiento
 * según el tipo de vehículo. Dentro de cada caso, declara una
 * variable feePerHour que represente la tarifa por hora para
 * ese tipo de vehículo:
 *  - CARRO: 5
 *  - MOTO: 3
 *  - CAMIÓN: 10
 * 3. Calcula el costo total multiplicando la tarifa por hora
 * por el número de horas y muestra el resultado.
*/

let vehicleType = "CARRO";
let hours = 3;

let feePerHour;
switch (vehicleType) {
  case "CARRO":
    feePerHour = 5;
    break;
  case "MOTO":
    feePerHour = 3;
    break;
  case "CAMIÓN":
    feePerHour = 10;
    break;
  default:
    feePerHour = 0;
}

let totalCost = feePerHour * hours;
console.log(`Total parking cost: $${totalCost}`);

/**
 * Ejercicio 3:
 * Aplicar descuentos de forma condicional según el valor de la
 * compra.
 * 
 * 1. Crea una variable purchaseAmount que represente el valor de
 * la compra.
 * 2. Crea un bloque condicional if que aplique un descuento según el valor de la compra:
 *  - Si el valor de la compra es mayor o igual a 100, aplica un 10% de descuento.
 *  - Si el valor de la compra es mayor o igual a 50 pero menor a 100, aplica un 5% de descuento.
 *  - Si el valor de la compra es menor a 50, no aplica descuento.
 * 3. Muestra el valor final de la compra después de aplicar el descuento.
 */

let purchaseAmount = 120;
let finalAmount;

if (purchaseAmount >= 100) {
  finalAmount = purchaseAmount * 0.9;
} else if (purchaseAmount >= 50) {
  finalAmount = purchaseAmount * 0.95;
} else {
  finalAmount = purchaseAmount;
}

console.log(`Final purchase amount: $${finalAmount}`);