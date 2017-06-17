let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.getElementsByClassName('add-button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = addToCart;
  }
});

function addToCart() {
  cart.push(event.target.dataset.item);
  let num = document.getElementById('cart-number');
  num.innerHTML = cart.length === 1 ? '1 item' : `${cart.length} items`;

  
}
