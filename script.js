import { addProduct } from "./pages/cart/cart.js";

const productsList = document.querySelector(".products-list");


async function getProducts() {
  try {
    const response = await fetch("./products.json");
    const data = await response.json();
    setDisplay(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

const createElements = (product) => {
  /*Creating Cards Elements */
  const productCard = document.createElement("li");
  const productName = document.createElement("h2");
  const productImage = document.createElement("img");
  const productPrice = document.createElement("span");
  const addBtn = document.createElement('button')
  /*Elements Classes*/
  productCard.classList.add("product-card");
  productName.classList.add("product-name");
  productImage.classList.add("product-image");
  productPrice.classList.add("product-price");
  addBtn.classList.add('btn-add')
 
  /*Setting the content on the elements*/ 
  productName.textContent = product.name;
  productImage.src = product.image;
  productPrice.textContent = `$${product.price}`;
  addBtn.innerHTML = '+'

  /*Adding the elements to their parents*/
  productCard.append(productImage, productName, productPrice,addBtn);
  productsList.appendChild(productCard);


  addBtn.addEventListener('click', ()=> {
    addProduct(product)
  })
  

};
/*Setting the display */
const setDisplay = (products) => {
  products.forEach((product) => {
    createElements(product);
  });
};

window.addEventListener('DOMContentLoaded', getProducts)
