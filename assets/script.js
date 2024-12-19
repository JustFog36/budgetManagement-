document.addEventListener('DOMContentLoaded', function () {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expenseForm = document.getElementById('expenseForm');
    const saveExpenseBtn = document.getElementById('saveExpenseBtn');

    addExpenseBtn.addEventListener('click', function () {
        expenseForm.classList.toggle('hidden');
    });

    saveExpenseBtn.addEventListener('click', function () {
        const title = document.getElementById('expenseTitle').value;
        const amount = document.getElementById('expenseAmount').value;

        // You can perform further actions with the title and amount, e.g., save to a database, update UI, etc.

        // For simplicity, let's just log the values to the console for now
        console.log('Title:', title);
        console.log('Amount:', amount);

        // Reset the form and hide it
        document.getElementById('expenseTitle').value = '';
        document.getElementById('expenseAmount').value = '';
        expenseForm.classList.add('hidden');
    });
});