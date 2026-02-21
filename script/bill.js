const billButton = document.getElementById('bill-button');
billButton.addEventListener('click', function () {
    const billOption = document.getElementById('bill-option').value;
    if (billOption === 'Select Now') {
        alert('Please select a bill to pay');
        return;
    }
    const billerAccountNumber = document.getElementById('biller-account-number').value;
    if (billerAccountNumber.length !== 11 || billerAccountNumber !== '56789101234') {
        alert('Invalid biller account number');
        return;
    }
    const amount = document.getElementById('bill-amount').value;
    if (amount <= 0) {
        alert('Amount must be greater than 0');
        return;
    }
    const pin = document.getElementById('bill-pin').value;
    if (pin.length !== 4 || pin !== '1234') {
        alert('Invalid pin');
        return;
    }
    const newBalance = Number(document.getElementById('balance').innerText) - Number(amount);
    if (newBalance < 0) {
        alert('Insufficient balance');
        return;
    }
    else {
        document.getElementById('balance').innerText = newBalance;
        alert('Bill paid successfully');
    }
});