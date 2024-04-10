const products = [{
    id: 0,
    name: 'Full Zip Hoodie',
    price: 1129,
    image: 'assest/images/product-1.jpg'
}, {
    id: 1,
    name: 'Womens Sherpa Hoodie',
    price: 599,
    image: 'assest/images/product-2.jpg'
}, {
    id: 2,
    name: 'Mens Essentials Hoodie',
    price: 779,
    image: 'assest/images/product-3.jpg'
}, {
    id: 3,
    name: 'Elevated Lined Hoodie',
    price: 1829,
    image: 'assest/images/product-4.jpg'
}, {
    id: 4,
    name: 'Womens Slab Hoodie',
    price: 29,
    image: 'assest/images/product-15.jpg'
}, {
    id: 5,
    name: 'Blocked Striped Hoodie',
    price: 1329,
    image: 'assest/images/product-6.jpg'
}, {
    id: 6,
    name: 'Mens Outdoors T-Shirt',
    price: 1699,
    image: 'assest/images/product-12.jpg'
}, {
    id: 7,
    name: 'Pocket Tee Rusty Red',
    price: 1499,
    image: 'assest/images/product-8.jpg'
}, {
    id: 9,
    name: 'Mens T-Shirt Rusty',
    price: 1199,
    image: 'assest/images/product-16.jpg'
}, ];

products.forEach(product => {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';

    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
    <div class="col-lg-12 col-sm-6 col-md-4">
    <div class="card position-relative h-100 card-listing hover-trigger">
    <div class="card-header">
        <picture class="position-relative overflow-hidden d-block bg-light">
        <img class="product-img" src="${product.image}" alt="${product.name}">
        </picture>
        <div class="card-actions">
            <div class="d-flex justify-content-center align-items-center flex-wrap mt-3">
                <button class="btn btn-outline-dark btn-sm mx-2">S</button>
                <button class="btn btn-outline-dark btn-sm mx-2">M</button>
                <button class="btn btn-outline-dark btn-sm mx-2">L</button>
            </div>
        </div>
    </div>
    <div class="card-body px-0 text-center">
        <div class="ms-5">
            <div class="rating position-relative d-table">
                <div class="position-absolute stars d-flex" style="width: 90%">
                    <i class="bi bi-star-fill text-dark mr-1 "></i>
                    <i class="bi bi-star-fill text-dark mr-1 "></i>
                    <i class="bi bi-star-fill text-dark mr-1 "></i>
                    <i class="bi bi-star-fill text-dark mr-1 "></i>
                    <i class="bi bi-star-half text-dark mr-1"></i>
                </div>
            </div> <span class="small fw-bolder ms-2 text-muted"> 4.7 (456)</span>
        </div>
        <h3 class="text-uppercase fw-bold fs-6 mt-4">${product.name}</h3>
        <p class="text-uppercase fw-bold fs-6 text-danger mt-4">Price: $${product.price}</p>
        <button class="btn bg-dark text-white" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
    </div>
</div>`;
    productListContainer.appendChild(productDiv);
});

let cart = JSON.parse(localStorage.getItem('cart'));

// Off-Canvas Details

function updateDataItems() {
    if (cart) {
        var tabDataItems = "";
        for (var i = 0; i < cart.length; i++) {
            tabDataItems += `<div>
            <div class="row mx-0 pb-4 mb-4 border-bottom">
                <div class="col-5">
                    <picture class="d-block bg-light">
                    <img src="${cart[i].image}" class= "img-height card-img-top" alt="${cart[i].name}">
                    </picture>
                </div>
                <div class="col-7">
                    <div class="ms-5">
                        <h6 class="justify-content-between d-flex align-items-start mb-2">
                            ${cart[i].name}
                            <i class="bi bi-x-lg" onclick="DeleteQuantity('${cart[i].name}')"></i>
                        </h6>
                        <small class="d-block text-muted fw-bolder">Quantity:${cart[i].quantity}</small>
                    </div>
                    <p class="fw-bolder text-end m-0">${cart[i].price}</p>
                </div>
            </div>
        </div>`;

        }
        document.getElementById('cart-items-1').innerHTML = tabDataItems;
    }
    const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('sub-total').innerText = `${subTotal.toFixed(2)}`;
}

function addToCart(id) {
    if (cart === null) {
        cart = [];
    }
    const newObj = {
        id: products[id].id,
        name: products[id].name,
        image: products[id].image,
        price: products[id].price,
        quantity: 1,
    }
    console.log(newObj)
    const existingItem = cart.findIndex(item => item.id === newObj.id);
    if (existingItem != -1) {
        cart[existingItem].quantity += 1;
    } else {
        cart.push(newObj);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    viewData();
    updateDataItems();
}