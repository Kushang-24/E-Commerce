const headerData = `
        <div class="container-fluid">
            <div class="row py-2">
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder py-lg-4 ms-5" href="#">E-Commerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item me-lg-4  position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder py-lg-4" href="index.html" role="button" data-bs-toggle=""
                                aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder py-lg-4" href="products.html" role="button">
                                Products
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder py-lg-4" href="#" role="button">
                                Mens
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder py-lg-4" href="#" role="button">Womens
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder -toggle py-lg-4" href="#" role="button" data-bs-toggle=""
                                aria-haspopup="true" aria-expanded="false">
                                Baby Collection
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder -toggle py-lg-4" href="#" role="button" data-bs-toggle=""
                                aria-haspopup="true" aria-expanded="false">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item me-lg-4 position-static" aria-expanded="false">
                            <a class="nav-link fw-bolder py-lg-4" href="#" role="button" data-bs-toggle=""
                                aria-haspopup="true" aria-expanded="false">
                                contact
                            </a>
                        </li>
                    </ul>
                    <ul class="list-unstyled mb-0 me-4 d-flex align-items-center">
                        <li class="d-inline-block">
                            <a class="btn px-2 text-decoration-none navbar-toggler border-0 d-flex align-items-center collapsed"
                                data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-transparent border-dark rounded"
                                        placeholder="search" aria-label="search" aria-describedby="button-addon2"><i
                                        class="bi bi-search"></i>
                                </div>
                            </a>
                        </li>
                        <li class="ms-1 d-inline-block">
                            <a class="btn px-3 text-decoration-none navbar-toggler border-0 d-flex align-items-center collapsed"
                                data-pr-search="">
                                <i class="bi bi-heart"></i>
                            </a>
                        </li>
                        <li class="ms-1 d-inline-block">
                            <a class="btn px-3 text-decoration-none navbar-toggler border-0 d-flex align-items-center collapsed"
                                data-pr-search="">
                                <i class="bi bi-person"></i>
                            </a>
                        </li>
                        <li class="ms-1 d-inline-block">
                        <a href="addtocart.html"
                            class="btn px-3 text-decoration-none navbar-toggler border-0 d-flex align-items-center collapsed"
                            data-pr-search="">
                            <div id="cart-icon">
                                <i class="bi bi-cart"></i> <span id="cart-count"></span>  
                            </div>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
        </div>
`;

document.querySelector('#header').innerHTML = headerData;
const product = JSON.parse(localStorage.getItem('cart'));
function viewData() {
    const product = JSON.parse(localStorage.getItem('cart'));
    if (product != null) {
        //console.log(product)
        document.getElementById('cart-count').innerHTML = product.length;
    } else {
        document.getElementById('cart-count').innerHTML = 0;
    }
}
viewData();
