// Get the expense form and expense list elements
var expenseForm = document.getElementById('expenseForm');
var expenseList = document.getElementById('expenseList');

// Track the total expense
var totalExpense = 0;

// Handle form submission
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the expense name and amount
  var expenseName = document.getElementById('expenseName').value;
  var expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  // Validate the expense amount
  if (!isNaN(expenseAmount)) {
    // Create a new expense item
    var expenseItem = document.createElement('li');
    expenseItem.textContent = expenseName + ': $' + expenseAmount.toFixed(2);

    // Add the expense item to the list
    expenseList.appendChild(expenseItem);

    // Update the total expense
    totalExpense += expenseAmount;
    document.getElementById('totalExpense').textContent = 'Total Expense: $' + totalExpense.toFixed(2);

    // Clear the input fields
    expenseName.value = '';
    expenseAmount.value = '';
  }
});