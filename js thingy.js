/// make index file 3 buttons one for each plan. Make a cart page that displays what is in the cart. Add a cart button to the index file. Each plan button should add it to the cart. I would also like a nuber of items on the cart button ///
  // Get the plan buttons
const plan1Button = document.getElementById('plan1');
const plan2Button = document.getElementById('plan2');
const plan3Button = document.getElementById('plan3');

// Get the cart button and count the numbers of stuffs
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// Initialize cart items
let cartItems = [];

// Add event listeners to plan buttons
plan1Button.addEventListener('click', addToCart);
plan2Button.addEventListener('click', addToCart);
plan3Button.addEventListener('click', addToCart);

// Function to add item to cart
function addToCart(event) {
  const plan = event.target.id;
  cartItems.push(plan);
  updateCartCount();
}

// Function to update cart count
function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

// Display cart items on the cart page
const cartItemsContainer = document.getElementById('cartItems');
cartItems.forEach(item => {
  const cartItem = document.createElement('p');
  cartItem.textContent = item;
  cartItemsContainer.appendChild(cartItem);
});
//js stuff
//html viewer
  <button id="plan1">Plan 1</button>
  <button id="plan2">Plan 2</button>
  <button id="plan3">Plan 3</button>
  
  <a href="cart.html" id="cartButton">Cart (<span id="cartCount">0</span>)</a>
  
  <script src="script.js"></script>
