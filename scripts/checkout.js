let form;

window.addEventListener('load', () => {
    Cart.init();

    if(Cart.isEmpty()) {
        return location.href = '/';
    }

    form = document.getElementById('payment-form');

    form.addEventListener('submit', evt => {
        evt.preventDefault();

        const data = new FormData(form);

        alert(`¡${data.get('name')}  ${data.get('lastname')} nos pondremos en contacto con usted en breves momentos.`);

        setTimeout(() => {
            Cart.clear();
            location.href = '/'
        }, 1000);
    });
});