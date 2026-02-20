const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {
    // get the number
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    // get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // validate the number and pin
    if (number === '01777777777' && pin === '1234') {
        alert('Login successful!');
        window.location.assign('./home.html');
    }
    else {
        alert('Invalid number or pin. Please try again.');
    }
});