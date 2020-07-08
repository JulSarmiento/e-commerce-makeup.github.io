let form;

window.addEventListener('load', () => {
    Cart.init();

    form = document.getElementById('payment-form');

    form.addEventListener('submit', evt => {
        evt.preventDefault();

        
    });
});