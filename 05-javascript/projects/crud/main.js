const searchItemInput = document.getElementById("search-item");
const updateItemInput = document.getElementById("update-item");

const searchButton = document.getElementById("search");
const addButton = document.getElementById("add");
const updateButton = document.getElementById("update");
const deleteButton = document.getElementById("delete");

const itemList = document.getElementById("item-list");

class ItemManager {
  constructor() {
    this.items = [];
  }

  // Retrieve items from local storage and update the internal items array
  getFromLocal() {
    this.items = JSON.parse(localStorage.getItem("items")) || [];
  }

  // Save the current items array to local storage
  saveToLocal(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  // Search for an item in the internal items array and update the UI accordingly
  search(item) {
    let found = this.items.includes(item);

    let styles = `mt-4 border px-2 py-1`;
    if (found) {
      updateItemInput.value = item;
      updateItemInput.disabled = false;

      updateButton.disabled = false;
      updateButton.className = styles + " border-green-500";

      deleteButton.disabled = false;
      deleteButton.className = styles + " border-green-500";

      addButton.disabled = true;
      addButton.className = styles + " border-gray-500";
    } else {
      // Item not found, disable update and delete actions
      updateItemInput.value = "";
      updateItemInput.disabled = true;

      updateButton.disabled = true;
      updateButton.className = styles + " border-gray-500";

      deleteButton.disabled = true;
      deleteButton.className = styles + " border-gray-500";

      addButton.disabled = false;
      addButton.className = styles + " border-green-500";
    }

    return found;
  }

  // Create a new item and save it to local storage
  create() {
    this.getFromLocal();

    let item = searchItemInput.value;

    this.items.push(item);
    this.saveToLocal(this.items);
  }

  // Read all items from local storage and update the UI
  read() {
    itemList.innerHTML = "";

    this.getFromLocal();
    this.items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      itemList.appendChild(li);
    });
  }

  // Update an existing item and save the changes to local storage
  update() {
    this.getFromLocal();

    let item = searchItemInput.value;
    let updatedItem = updateItemInput.value;

    this.items = this.items.filter((i) => i !== item);
    this.items.push(updatedItem);

    this.saveToLocal(this.items);
  }

  // Delete an item from the internal items array and update local storage
  delete() {
    this.getFromLocal();

    let item = searchItemInput.value;
    this.items = this.items.filter((i) => i !== item);
    console.log(this.items);

    this.saveToLocal(this.items);
  }
}

// Initialize the item manager
const itemManager = new ItemManager();

// Set up event listeners for the search, add, update, and delete buttons

searchButton.addEventListener("click", () => {
  itemManager.search(searchItemInput.value);
});

addButton.addEventListener("click", () => {
  itemManager.create();
  itemManager.read();
});

updateButton.addEventListener("click", () => {
  itemManager.update();
  itemManager.read();
});

deleteButton.addEventListener("click", () => {
  itemManager.delete();
  itemManager.read();
});

itemManager.read();
