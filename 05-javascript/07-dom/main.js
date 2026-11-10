/**
 * Selectors
 *
 * Allows to select elements from the DOM by various methods, such
 * as ID, class, or tag name
 */

const newToDoInput = document.getElementById("new-todo");
const addToDoBtn = document.getElementById("add-todo");

const todoList = document.getElementById("todo-list");

/**
 * Event Listeners
 *
 * Allows to attach event handlers to elements, such as click or
 * submit events
 */

addToDoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the value of the new to-do item from the input field
  const newToDo = newToDoInput.value;

  // Create a new list item element for the to-do item
  const newToDoItem = document.createElement("li");

  newToDoItem.className =
    "flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-700";
  newToDoItem.innerHTML = `
    <p class="flex-1">${newToDo}</p>
    <div class="flex gap-2">
      <button id="mark-todo-as-complete" class="bg-green-600 text-white rounded-2xl px-4 py-2 hover:bg-green-700 focus:outline-none focus:ring-0 hover:cursor-pointer">Complete</button>
      <button id="delete-todo" class="bg-red-600 text-white rounded-2xl px-4 py-2 hover:bg-red-700 focus:outline-none focus:ring-0 hover:cursor-pointer">Delete</button>
    </div>
  `;

  // Append the new list item to the to-do list
  todoList.appendChild(newToDoItem);

  newToDoInput.value = "";
});
