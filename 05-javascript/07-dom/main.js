// Array to store todo items
let todos = [];
let completeTodos = [];

// Class to represent a todo item
class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.completed = false;
  }

  markAsComplete() {
    this.completed = true;
  }

  buildTodo() {
    const todoItem = document.createElement("li");

    todoItem.id = `todo-${this.id}`;
    todoItem.className =
      "flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-700";
    todoItem.innerHTML = `
    <p class="flex-1">${this.text}</p>
    ${
      this.completed
        ? ""
        : `
        <div class="flex gap-2">
        <button id="complete-todo" class="bg-green-600 text-white rounded-2xl px-4 py-2 hover:bg-green-700 focus:outline-none focus:ring-0 hover:cursor-pointer" onClick="markTodoAsComplete(${this.id})">
          Complete
        </button>
        <button id="update-todo" class="bg-yellow-600 text-white rounded-2xl px-4 py-2 hover:bg-yellow-700 focus:outline-none focus:ring-0 hover:cursor-pointer">Update</button>
        <button id="delete-todo" class="bg-red-600 text-white rounded-2xl px-4 py-2 hover:bg-red-700 focus:outline-none focus:ring-0 hover:cursor-pointer" onClick="deleteTodo(${this.id})">
          Delete
        </button>
      </div>
      `
    } 
    
  `;

    return todoItem;
  }
}

// Retrieve elements from the DOM
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-list");
const completeTodoList = document.getElementById("complete-todo-list");

const renderTodos = () => {
  todoList.innerHTML = "";
  completeTodoList.innerHTML = "";

  for (const todo of todos) {
    const todoItem = todo.buildTodo();
    todoList.appendChild(todoItem);
  }

  for (const todo of completeTodos) {
    const todoItem = todo.buildTodo();
    completeTodoList.appendChild(todoItem);
  }
};

const createTodo = () => {
  const todoText = todoInput.value;
  if (todoText === "") return;

  let id = todos.length + 1;
  let todo = new Todo(id, todoText);

  todos.push(todo);
  console.log(todo);
  renderTodos();

  todoInput.value = "";
};

const markTodoAsComplete = (id) => {
  let todo = todos.find((todo) => todo.id === id);
  if (todo) todo.markAsComplete();

  completeTodos.push(todo);
  deleteTodo(id);
  renderTodos();
  console.log(todos);
  console.log(completeTodos);
};

const updateTodo = (id) => {};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  createTodo();
});
