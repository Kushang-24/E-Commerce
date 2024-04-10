const ResponsiveHeaderData = `

`;

document.querySelector('#ResponsiveHeader').innerHTML = ResponsiveHeaderData;
const product = JSON.parse(localStorage.getItem('cart'));

// function viewData() {
//     const product = JSON.parse(localStorage.getItem('cart'));
//     if (product != null) {
//         document.getElementById('cart-count').innerHTML = product.length;
//     } else {
//         document.getElementById('cart-count').innerHTML = 0;
//     }
// }
// viewData();