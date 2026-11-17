const addToCart = (product) => {
  cart.push(product);
  renderCart();
};

const removeFromCart = (productName) => {
  const index = cart.findIndex(item => item.name === productName);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
};

const calculateCart = () => {
  let total = 0;
  for (let item of cart) {
    total += item.price;
  }
  totalInput.value = total;
};

const renderCart = () => {
  cartList.innerHTML = "";

  for (let item of cart) {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onClick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartList.appendChild(li);
    calculateCart();
  }
};

const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
  { name: "Product 4", price: 40 },
  { name: "Product 5", price: 50 }
];

const cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart");
const totalInput = document.getElementById("total");

for (let product of products) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${product.name} - $${product.price}
    <button onClick="addToCart(
      { name: '${product.name}', price: ${product.price} }
    )">
      Add to Cart
    </button>
  `;
  productList.appendChild(li);
}
