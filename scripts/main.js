let products;


function functionOne() {
    console.log(1);
    location.href = 'checkout.html';
}

function functionTwo(button) {
    console.log(2);
    button.innerHTML = 'Cargando...';
}


//Funcion para agregar productos al carrito mediante el boton "añadir al carrito"
function setAddCartListener(button) {
    button.addEventListener('click', function(){
        const productID = button.getAttribute('data-product');
        const product = products[productID]

        Cart.add(product);

        alert(`¡${product.name}, añadido al carrito!`);
        
    })
}

//evento de lista de productos y sus cards

window.addEventListener('load', function() {
    Cart.init();

    products = Product.loadItems();

    let html = '';
    for(let i = 0; i < products.length; i++) {
        const product = products[i];

        html += `<div class="card">
                    <img src="${product.picture}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${Product.formatPrice(product.value)}</p>
                    <button class="button cart-add" data-product="${product.id}">Añadir al carrito</button>
                </div>`; 

    }

    document.getElementById('products').innerHTML = html;

    document.querySelectorAll('.cart-add').forEach(setAddCartListener);

    document.querySelector('.cart-clear').addEventListener('click', Cart.clear);

    document.querySelector('.cart-pay').addEventListener('click', function() {
        setTimeout(() => {
            functionOne(this);
        }, 1000);
        functionTwo(this);
    });
});

