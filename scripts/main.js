let products;

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

    products = [
        new Product(0, 'Labial mate rojo', 25000),
        new Product(1, 'Base luminosa beige', 50000),
        new Product(2, 'Pestañina cafe aprueba de agua', 25000),
        new Product(3, 'Primer siliconado', 150000),
        new Product(4, 'Paleta de rubores mate', 80000),
        new Product(5, 'Pestañas Odashi divo', 25000),
        new Product(6, 'Iluminador champaña', 50000),
        new Product(7, 'Corrector cobertura alta', 45000 ),
        new Product(8, 'Pomada de cejas de Anastasia', 95000),
        new Product(9, 'Delineador negro de Kath von D', 95000),
        new Product(10, 'Paleta de sombras Mercury de Huda', 300000),
        new Product(11, 'Set de 24 Brochas Atenea', 189000),
        new Product(12, 'Gloss de cereza', 20000),
        new Product(13, 'Fijador brillitos de Mac', 110000),
        new Product(14, 'Beatuy Blender', 30000),
        new Product(15, 'N.Y.M.P.H', 220000),
        new Product(16, 'Contorno en crema', 30000),
        new Product(17, 'Crema contorno de ojos', 40000),
        new Product(18, 'Crema hidrante super hidrantante', 60000),
        new Product(19, 'Polvo suelto translucido banana', 60000)
    ];


    let html = '';
    for(let i = 0; i < products.length; i++) {
        const product = products[i];

        html += `<div class="card">
                    <img src="${product.picture}" alt="${product.name}">
                    <h2>#${product.id} - ${product.name} </h2>
                    <p> $ ${product.value}</p>
                    <button class="button cart-add" data-product="${product.id}">Añadir al carrito</button>
                </div>`; 

    }

    document.getElementById('products').innerHTML = html;

    document.querySelectorAll('.cart-add').forEach(setAddCartListener);

    document.querySelector('.cart-pay').addEventListener('click', function() {
        alert('¡Gracias por seleccionarnos!')
    })

    document.querySelector('.cart-clear').addEventListener('click', Cart.clear);
})
