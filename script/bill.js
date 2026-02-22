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
        const historyContainer = document.getElementById('history-container');
        const historyItem = document.createElement('li');
        historyItem.innerHTML = `
            <li class="list-row flex justify-between items-center">
                <div class="flex items-center justify-between gap-2.5">
                    <div class="bg-[#0808080d] rounded-full p-2">
                        <img class="size-10 rounded-box" src="./assets/opt-1.png"/>
                    </div>
                    <div>
                        <div class="font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#080808b3]">${amount} is Paid as ${billOption} to Account ${billerAccountNumber}</div>
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