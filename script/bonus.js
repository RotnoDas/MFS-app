const bonusButton = document.getElementById('bonus-button');
bonusButton.addEventListener('click', function () {
    const bonusCoupon = document.getElementById('bonus-coupon').value;
    if (bonusCoupon === 'get-500') {
        const balance = document.getElementById('balance').innerText;
        const newBalance = Number(balance) + 500;
        document.getElementById('balance').innerText = newBalance;
        alert('Bonus added successfully');
        const historyContainer = document.getElementById('history-container');
        const historyItem = document.createElement('li');
        historyItem.innerHTML = `
            <li class="list-row flex justify-between items-center">
                <div class="flex items-center justify-between gap-2.5">
                    <div class="bg-[#0808080d] rounded-full p-2">
                        <img class="size-10 rounded-box" src="./assets/opt-1.png"/>
                    </div>
                    <div>
                        <div class="font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#080808b3]">500 is Added as Bonus. New Balance is ${newBalance}</div>
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
        alert('Invalid coupon. Please try again.');
    }
});