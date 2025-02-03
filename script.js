const products = document.querySelectorAll('.products-list li')
const price = document.querySelector('.product-price')
const image = document.querySelector('.product-image')
const add_btn = document.querySelector('.btn-add')

products.forEach((product) => {
  console.log(product.children[1].textContent);
})

let productsList = []


