// String Methods

const text = "Hello, World!";

// .length
// Returns the length of the string
console.log(text.length)

// charAt()
// Returns the character specified by the index
console.log(text.charAt(5))

// slice()
// Extracts a section of the string and returns it as a new string
console.log(text.slice(7, 12))

// toUpperCase()
// Converts the string to uppercase letters
console.log(text.toUpperCase())

// toLowerCase()
// Converts the string to lowercase letters
console.log(text.toLowerCase())

// trim()
// Removes whitespace from both ends of the string
console.log(text.trim())

// includes()
// Checks if the string contains the specified substring
console.log(text.includes("World"))

// startsWith()
// Checks if the string starts with the specified substring
console.log(text.startsWith("Hello"))

// endsWith()
// Checks if the string ends with the specified substring
console.log(text.endsWith("World!"))

// repeat()
// Returns a new string with a specified number of copies of the string
console.log(text.repeat(3))

// replace()
// Replaces a specified value with another value in the string
console.log(text.replace("World", "Universe"))

// replaceAll()
// Replaces all occurrences of a specified value with another value in the string
console.log(text.replaceAll("l", "L"))

// split()
// Splits the string into an array of substrings
console.log(text.split(", "))