document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    alert(`Gracias ${name}, tu reservación del ${checkin} al ${checkout} ha sido recibida. Te contactaremos pronto al correo: ${email}.`);
});
