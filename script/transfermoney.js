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
        const historyContainer = document.getElementById('history-container');
        const historyItem = document.createElement('li');
        historyItem.innerHTML = `
            <li class="list-row flex justify-between items-center">
                <div class="flex items-center justify-between gap-2.5">
                    <div class="bg-[#0808080d] rounded-full p-2">
                        <img class="size-10 rounded-box" src="./assets/opt-1.png"/>
                    </div>
                    <div>
                        <div class="font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#080808b3]">${transferAmount} is transferred to Account ${accountNumber}</div>
                        <div class="text-xs font-normal leading-[auto] tracking-[0%] text-[#080808b3]">${new Date().toLocaleString()}</div>
                    </div>
                </div>
                <div class="w-6 h-6">
                    <i class="fa-solid fa-ellipsis-vertical w-full h-full"></i>
                </div>
            </li>
            `;
        document.getElementById('out').classList.add('hidden');
        historyContainer.appendChild(historyItem);
    }
});