document.addEventListener('DOMContentLoaded', function(){
console.log("hello")

    const expenseBtn = document.getElementById('expenseBtn')
    const expenseTitle = document.getElementById('expenseTitle')
    const expenseAmnt = document.getElementById('expenseAmnt')
    const expenseForm = document.getElementsByClassName('hidden')

    expenseBtn.addEventListener('click', function() {
        expenseForm.classList.('hidden')
    })
})

