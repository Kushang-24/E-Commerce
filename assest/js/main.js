const products = [
    {
        id: 0,
        name: 'iphone 15 pro max',
        price: 1000,
        image: 'assest/images/product-1.png'
    },
    {
        id: 1,
        name: 'smasung s24 ultra',
        price: 500,
        image: 'assest/images/product-2.webp'
    },
    {
        id: 2,
        name: 'redmi note pro+ 5g',
        price: 1000,
        image: 'assest/images/product-3.webp'
    }, {
        id: 3,
        name: 'oppo a79 5G',
        price: 1000,
        image: 'assest/images/product-4.webp'
    },
];


const productList = document.getElementById('product-list');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'card product-card col-md-4';
    productCard.innerHTML = `
<img src="${product.image}" height="310px" class="card-img-top" alt="${product.name}">
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">$${product.price}</p>
  <button id="add-to-cart-button" onclick="addToCart('${product.id}')" class="btn btn-primary">Add to Cart</button>
</div>
`;
    productList.appendChild(productCard);
});

let cart = JSON.parse(localStorage.getItem('cart'));
function addToCart(id) {

    if (cart == null) {
        cart = [];
    }
    const newObj = {
        id: products[id].id,
        name: products[id].name,
        image: products[id].image,
        price: products[id].price,
        quantity: 1,
    }
    const existingItem = cart.findIndex(item => item.id === newObj.id);
    if (existingItem != -1) {
        cart[existingItem].quantity += 1;
    } else {
        cart.push(newObj);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    viewData();
}