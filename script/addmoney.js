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
    const historyContainer = document.getElementById('history-container');
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
            <li class="list-row flex justify-between items-center">
                <div class="flex items-center justify-between gap-2.5">
                    <div class="bg-[#0808080d] rounded-full p-2">
                        <img class="size-10 rounded-box" src="./assets/opt-1.png"/>
                    </div>
                    <div>
                        <div class="font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#080808b3]">${amount} Added to ${bank} Account ${accountNumber}</div>
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
});