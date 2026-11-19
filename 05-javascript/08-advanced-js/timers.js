// Timers in JavaScript
// Timers allow you to execute code after a delay or
// at regular intervals

// setTimeout()
// Executes a function after a specified delay (in milliseconds)

// clearTimeout()
// Stops the execution of a timer set with setTimeout()

let timeout = setTimeout(() => {
  console.log("This message is displayed after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

clearTimeout(timeout); // Stops the execution of the timeout before it occurs


// setInterval()
// Executes a function repeatedly at specified intervals
// (in milliseconds)

// clearInterval()
// Stops the execution of a timer set with setInterval()

let count = 0;
let interval = setInterval(() => {
  console.log("This message is displayed every 2 seconds");
  count++;
  
  if (count >= 5) {
    clearInterval(interval);
  }
}, 2000); // 2000 milliseconds = 2 seconds
