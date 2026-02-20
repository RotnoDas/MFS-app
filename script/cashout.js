const cashOutButton = document.getElementById('cashout-button');
cashOutButton.addEventListener('click', function () {
    // get the agent number and verify
    const agentNumber = document.getElementById('cashout-number').value;
    if (agentNumber !== '01666666666' && agentNumber.length !== 11) {
        alert('Invalid agent number. Please try again.');
        return;
    }
    const cashOutAmount = document.getElementById('amount').value;
    const Balance = document.getElementById('balance').innerText;
    const currentBalance = Number(Balance);
    const withdrawAmount = Number(cashOutAmount);
    const newBalance = currentBalance - withdrawAmount;
    if (newBalance < 0) {
        alert('Insufficient balance. Please try again.');
        return;
    }
    const cashOutPin = document.getElementById('cashout-pin').value;
    if (cashOutPin === '1234') {
        alert('Cash out successful!');
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Invalid pin. Please try again.');
        return;
    }
})