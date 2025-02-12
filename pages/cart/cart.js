const cartList = document.querySelector(".cart-list");

const storedCart =  JSON.parse(localStorage.getItem("cart")) || []
const recoverStorage = [...storedCart];

const cart = recoverStorage;

export function addProduct(product) {
  const newProduct = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    id: cart.length + 1,
  };

  const isProductInCart = cart.findIndex((p) => p.name === newProduct.name);
  if (isProductInCart !== -1) {
    cart[isProductInCart].quantity++;
  } else {
    cart.push(newProduct);
  }
  localStorage.setItem('cart', JSON.stringify(cart))

  return cart;
}

function createCart (product){
  const cartItem = document.createElement("li");
  const productName = document.createElement("h2");
  const productImage = document.createElement("img");
  const productPrice = document.createElement("span");
  productName.textContent = product.name;
  productImage.src = product.image;
  productImage.alt = 'product image'
  productPrice.textContent = product.price;
  cartItem.append(productName, productImage,productPrice);

  cartList.appendChild(cartItem);
};

function setCartDisplay() {
  cart.forEach(createCart)
};


window.addEventListener('DOMContentLoaded',setCartDisplay)