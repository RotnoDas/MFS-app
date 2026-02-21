const transferMoneyButton = document.getElementById('transfer-money-button');
transferMoneyButton.addEventListener('click', function () {
    const accountNumber = document.getElementById('transfer-money-account-number').value;
    if (accountNumber.length !== 11 || accountNumber !== '10987654321') {
        alert('Invalid account number. Please try again.');
        return;
    }
    const transferAmount = document.getElementById('transfer-amount').value;
    if (transferAmount <= 0) {
        alert('Amount must be greater than 0. Please try again.');
        return;
    }
    const transferMoneyPin = document.getElementById('transfer-money-pin').value;
    if (transferMoneyPin !== '1234') {
        alert('Invalid pin. Please try again.');
        return;
    }
    const balance = document.getElementById('balance').innerText;
    const currentBalance = Number(balance);
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Insufficient balance. Please try again.');
        return;
    }
    else {
        alert('Transfer successful');
        document.getElementById('balance').innerText = newBalance;
    }
});