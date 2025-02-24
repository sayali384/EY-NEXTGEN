function addExpense() {
    let expenseInput = document.getElementById("expense").value;
    let priceInput = document.getElementById("price").value;
    
    if (expenseInput === "" || priceInput === "") {
        alert("Please enter both expense and price.");
        return;
    }
    
    let table = document.getElementById("expense-list");
    let row = table.insertRow();
    let expenseCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let actionCell = row.insertCell(2);
    
    expenseCell.innerText = expenseInput;
    priceCell.innerText = `Rs ${priceInput}`;

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        table.deleteRow(row.rowIndex - 1);
    };
    actionCell.appendChild(deleteBtn);
    
    document.getElementById("expense").value = "";
    document.getElementById("price").value = "";
}