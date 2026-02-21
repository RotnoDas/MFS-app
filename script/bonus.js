const bonusButton = document.getElementById('bonus-button');
bonusButton.addEventListener('click', function () {
    const bonusCoupon = document.getElementById('bonus-coupon').value;
    if (bonusCoupon === 'get-500') {
        const balance = document.getElementById('balance').innerText;
        const newBalance = Number(balance) + 500;
        document.getElementById('balance').innerText = newBalance;
        alert('Bonus added successfully');
    }
    else {
        alert('Invalid coupon. Please try again.');
    }
});