let form;

window.addEventListener('load', () => {
    Cart.init();

    form = document.getElementById('payment-form');

    form.addEventListener('submit', evt => {
        evt.preventDefault();

    });
});

function handlePay() {
    let nameValue = document.getElementById('name').value;

    alert(`¡${nameValue}, muchas gracias por su compra! Nos pondremos en contacto con usted en breves momentos.`)
}