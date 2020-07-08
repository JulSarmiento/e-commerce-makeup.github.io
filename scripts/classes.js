
class Product {
    // En esta clase se crea el objeto producto con el que se trabajara en el e-commerce. 
    constructor(id, name, value, picture ='assets/images/image.png') {
        this.id = id;
        this.name = name;
        this.value = value;
        this.picture = picture;
    };

    static loadItems() {
        return [
            // array de productos 
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
    }

    static formatPrice(price) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price);
    }
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

        Cart.element = document.getElementById('cart') || {};

        Cart.total = document.querySelector('.total') || {};

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
        
        Cart._print();

    }

    static save() {
        // Guarda el carrito en el LocalStorage.
        localStorage.setItem(Cart.KEY, JSON.stringify(Cart._cart));

        Cart._print();
    }

    static _print() {
        // Eta función crea la lista de productos agregados al carrito.
        let html = '';
        let totalPrice = 0;

        for(let i = 0; i < Cart._cart.length; i++) {
            const product = Cart._cart[i];
            totalPrice += product.value;

            html += `<li class="list">${product.name}</li>
                    <p>${Product.formatPrice(product.value)}</p>
                    <button class="remove-icon" data-position="${i}">
                        <i class="fas fa-minus-circle" id="remove-icon"></i>
                    </button>`; 
        }
    
        Cart.element.innerHTML = html;

        Cart.total.innerHTML = Product.formatPrice(totalPrice);

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

    static sort(param) {
        Cart._cart = Cart._cart.sort(function(a, b){
            return a[param].toString().localeCompare(b[param].toString());
        });

        Cart._print();
    }

}

class Checkout {
    static processPayment() {
    }
}