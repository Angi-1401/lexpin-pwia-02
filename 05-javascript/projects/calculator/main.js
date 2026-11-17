const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

for (let button of buttons) {
  if (button.textContent === "DEL") {
    button.addEventListener("click", () => {
      display.value = display.value.slice(0, -1);
    });
    continue;
  }
  if (button.textContent === "AC") {
    button.addEventListener("click", () => {
      display.value = "";
    });
    continue;
  }
  if (button.textContent === "=") {
    button.addEventListener("click", () => {
      result = eval(display.value);
      display.value = result;
    });
    continue;
  }

  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
}
