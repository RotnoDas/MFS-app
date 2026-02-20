const addMoneyButton = document.getElementById('add-money-button');
addMoneyButton.addEventListener('click', function () {
    const bank = document.getElementById('add-money-bank').value;
    if (bank === 'Select Bank') {
        alert('Please select a bank');
        return;
    }
    const accountNumber = document.getElementById('add-money-account-number').value;
    if (accountNumber.length !== 11 || accountNumber !== '12345678910') {
        alert('Invalid account number');
        return;
    }
    const amount = document.getElementById('add-money-amount').value;
    if (amount <= 0) {
        alert('Amount must be greater than 0');
        return;
    }
    const pin = document.getElementById('add-money-pin').value;
    if (pin.length !== 4 || pin !== '1234') {
        alert('Invalid pin');
        return;
    }
    const newBalance = Number(amount) + Number(document.getElementById('balance').innerText);
    document.getElementById('balance').innerText = newBalance;
    alert('Money added successfully');
});