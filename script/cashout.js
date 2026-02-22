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
        const historyContainer = document.getElementById('history-container');
        const historyItem = document.createElement('li');
        historyItem.innerHTML = `
            <li class="list-row flex justify-between items-center">
                <div class="flex items-center justify-between gap-2.5">
                    <div class="bg-[#0808080d] rounded-full p-2">
                        <img class="size-10 rounded-box" src="./assets/opt-1.png"/>
                    </div>
                    <div>
                        <div class="font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#080808b3]">Cash Out ${cashOutAmount} to Agent Number ${agentNumber}</div>
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
    else {
        alert('Invalid pin. Please try again.');
        return;
    }
})