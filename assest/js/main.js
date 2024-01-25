const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 20.99,
        image: 'assest/images/product-1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 30.49,
        image: 'assest/images/product-2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 50.89,
        image: 'assest/images/product-3.jpg'
    }, {
        id: 4,
        name: 'Product 4',
        price: 70.59,
        image: 'assest/images/product-4.jpg'
    },
];

const productListContainer = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
            <div class="row px-1">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="text-uppercase fw-bold fs-4 mt-4">${product.name}</h3>
                <p class="text-uppercase fw-bold fs-5 text-danger mt-4">Price: $${product.price.toFixed(2)}</p>
                <button class="btn bg-dark text-white" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
`;
    productListContainer.appendChild(productDiv);
});

function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedProduct = products.find(product => product.id === productId);

    const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1
    };

    const existingItemIndex = cartItems.findIndex(item => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        cartItems.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
}