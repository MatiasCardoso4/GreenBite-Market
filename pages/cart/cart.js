const cartList = document.querySelector(".cart-list");

const recoverCart = JSON.parse(localStorage.getItem("cart"))
const cart = recoverCart ? recoverCart : [] ;

export function addProduct(product) {
  const newProduct = {
    name: product.name,
    price: product.price,
    quantity: 1,
    id: cart.length + 1,
  };

  const isProductInCart = cart.findIndex((p) => p.name === newProduct.name);
  if (isProductInCart !== -1) {
    cart[isProductInCart].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return cart;
}

const createCart = (product) => {
  const cartItem = document.createElement("li");
  const productName = document.createElement("h2");
  const productImage = document.createElement("img");
  const productPrice = document.createElement("span");
  productName.textContent = product.name;
  productImage.src = product.image
  productPrice.textContent = product.price;
  cartItem.append(productName, productPrice);

 cartList.append(cartItem)
};

const setDisplay = () => {
  cart.forEach((product) => {
    createCart(product);
  });
};

setDisplay();
