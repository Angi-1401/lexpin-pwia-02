// Regex (Regular Expressions)

// Essentials regex

// Email (username@domain.com)
// ^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$

// Secure password (at least 8 characters, including uppercase, lowercase, number, and special character)
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

// Date YYYY-MM-DD (e.g., 2024-06-15)
// ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$

// Hexadecimal color (e.g., #FFFFFF or #FFF)
// ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const password = "MyP@ssw0rd!";

// test()
// Allows to match a string against the regex pattern
console.log(passwordPattern.test(password));
