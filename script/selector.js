const addMoneySection = document.getElementById('add-money');
const cashOutSection = document.getElementById('cash-out');
const transferMoneySection = document.getElementById('transfer-money');
const billSection = document.getElementById('bill');
const bonusSection = document.getElementById('bonus');

addMoneySection.classList.add('hidden');
cashOutSection.classList.add('hidden');
transferMoneySection.classList.add('hidden');
billSection.classList.add('hidden');
bonusSection.classList.add('hidden');


document.getElementById('grid-add-money').addEventListener('click', () => {
    addMoneySection.classList.remove('hidden');
    cashOutSection.classList.add('hidden');
    transferMoneySection.classList.add('hidden');
    billSection.classList.add('hidden');
    bonusSection.classList.add('hidden');
});

document.getElementById('grid-cash-out').addEventListener('click', () => {
    addMoneySection.classList.add('hidden');
    cashOutSection.classList.remove('hidden');
    transferMoneySection.classList.add('hidden');
    billSection.classList.add('hidden');
    bonusSection.classList.add('hidden');
});

document.getElementById('grid-transfer-money').addEventListener('click', () => {
    addMoneySection.classList.add('hidden');
    cashOutSection.classList.add('hidden');
    transferMoneySection.classList.remove('hidden');
    billSection.classList.add('hidden');
    bonusSection.classList.add('hidden');
});

document.getElementById('grid-pay-bill').addEventListener('click', () => {
    addMoneySection.classList.add('hidden');
    cashOutSection.classList.add('hidden');
    transferMoneySection.classList.add('hidden');
    billSection.classList.remove('hidden');
    bonusSection.classList.add('hidden');
});

document.getElementById('grid-get-bonus').addEventListener('click', () => {
    addMoneySection.classList.add('hidden');
    cashOutSection.classList.add('hidden');
    transferMoneySection.classList.add('hidden');
    billSection.classList.add('hidden');
    bonusSection.classList.remove('hidden');
});