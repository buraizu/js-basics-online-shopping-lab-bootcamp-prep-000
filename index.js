var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() *100);
  item = {
  itemName: item,
  itemPrice: price
    }
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  let displayCart = [];
  for (let i = 0; i < cart.length; i++) {
    displayCart.push[i];
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
