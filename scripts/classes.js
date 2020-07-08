
class Product {
    // En esta clase se crea el objeto producto con el que se trabajara en el e-commerce. 
    constructor(id, name, value, picture='assets/images/image.png') {
        this.id = id;
        this.name = name;
        this.value = value;
        this.picture = picture;
    };
};

class Cart {

    // Esta es la llave que indica donde se almacena el carrito en el loclastorage.
    static KEY = 'app_cart';

    // Este es el carrito. Va con _ para indicar que es privado. 
    static _cart;

    static element;

    static init() {
        // Esto es para inicializar el carrito desde el localstorage y coloca por defecto una lista vacia,
        // en el caso de que no haya data en el localstorage. 
        Cart._cart = JSON.parse(localStorage.getItem(Cart.KEY) || '[]');

        Cart.element = document.getElementById('cart');

        Cart._print();

    }

    static add(product) {
        //Añade un elemento al array del carrito.
        Cart._cart.push(product);
        Cart.save();
    }

    static remove(index) {
        //Elimina el elemento seleccionado del array mendiante su indice. 
        Cart._cart.splice(index, 1);
        Cart.save()
    }

    static clear() {
        //Elimina del carrito el indice seleccionado. 
        Cart._cart = [];
        localStorage.removeItem(Cart.KEY);

        Cart.element.innerHTML = '';
    }

    static save() {
        // Guarda el carrito en el LocalStorage.
        localStorage.setItem(Cart.KEY, JSON.stringify(Cart._cart));

        Cart._print();

        //TODO document.getElementById('cart').insertAdjacentHTML('beforeend', `<li class="list">${product.name}</li>`);
    }

    static _print() {
        // Eta función crea la lista de productos agregados al carrito.
        let html = '';
        for(let i = 0; i < Cart._cart.length; i++) {
            const product = Cart._cart[i];
            html += `<li class="list">${product.name}</li>
                    <p>$${product.value}</p>
                    <button class="remove-icon" data-position="${i}"><i class="fas fa-minus-circle" id="remove-icon"></i></button>`; 
        }
    
        Cart.element.innerHTML = html;

        document.querySelectorAll('.remove-icon').forEach(Cart._setRemoveCartListener);
    }

    static _setRemoveCartListener(button) {
        button.addEventListener('click', function(){
            const position = button.getAttribute('data-position');
            const product = Cart._cart[position].name;
    
            Cart.remove(position);
    
            alert(`¡${product}, removido del carrito!`);
            
        })
    }

    static totalPrice() {
        let price;
        let totalPrice;

    }

}