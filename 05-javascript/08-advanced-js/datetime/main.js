// Dates & Time in JavaScript

const demo = document.getElementById("demo");

// Current date and time
const currentDatetime = new Date();
demo.innerHTML = `Current date and time: ${currentDatetime}`;

/**
 * Creating Date objects with different parameters
 * new date(date-string) e.g.: 2026-06-14
 * new Date(year,month)
 * new Date(year,month,day)
 * new Date(year,month,day,hours)
 * new Date(year,month,day,hours,minutes)
 * new Date(year,month,day,hours,minutes,seconds)
 * new Date(year,month,day,hours,minutes,seconds,ms)
 */

// Date Get Methods
demo.innerHTML += `<br>Year: ${currentDatetime.getFullYear()}`;
demo.innerHTML += `<br>Month: ${currentDatetime.getMonth() + 1}`; // Months are zero-based
demo.innerHTML += `<br>Date: ${currentDatetime.getDate()}`;
demo.innerHTML += `<br>Day: ${currentDatetime.getDay()}`; // 0 = Sunday, 1 = Monday, ...
demo.innerHTML += `<br>Hours: ${currentDatetime.getHours()}`;
demo.innerHTML += `<br>Minutes: ${currentDatetime.getMinutes()}`;
demo.innerHTML += `<br>Seconds: ${currentDatetime.getSeconds()}`;
demo.innerHTML += `<br>Milliseconds: ${currentDatetime.getMilliseconds()}`;

// Date Set Methods
currentDatetime.setFullYear(2025);
currentDatetime.setMonth(11); // December (0-based)
currentDatetime.setDate(25);
currentDatetime.setHours(10);
currentDatetime.setMinutes(30);
currentDatetime.setSeconds(45);
currentDatetime.setMilliseconds(500);

demo.innerHTML += `<br>Updated date and time: ${currentDatetime}`;

// Change timezones
const utc = new Date("2025-12-25T10:30:45.500Z");
const nyDate = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
demo.innerHTML += `<br>New York time: ${nyDate}`;
