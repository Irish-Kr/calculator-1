function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function printBalance(num) {
    document.getElementById("balance").innerText = num;
}

function getAmount() {
    return Number(document.getElementById("amount").value);
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}

function clearAmount() {
    document.getElementById("amount").value = "";
}

function isAmountValid() {
    var typed = document.getElementById("amount").value;

    if (typed == "") {
        showMessage("Please enter an amount.");
        return false;
    } else if (Number(typed) <= 0) {
        showMessage("Amount must be more than zero.");
        return false;
    }
    return true;
}

function printLastUpdated(timeText) {
    document.getElementById("timestamp").innerText = timeText;
}

document.getElementById("credit-btn").addEventListener("click", function() {
    if (isAmountValid() == false) {
        return;
    }

    var amount = getAmount();
    var newBalance = getBalance() + amount;
    
    printBalance(newBalance);
    showMessage("Credited " + amount + " successfully.");

    var now = new Date().toLocaleString();
    printLastUpdated(now);

    clearAmount();
});

document.getElementById("debit-btn").addEventListener("click", function() {
    if (isAmountValid() == false) {
        return;
    }

    var amount = getAmount();
    if (amount > getBalance()) {
        showMessage("Not enough balance.");
        return;
    }

    var newBalance = getBalance() - amount;

    printBalance(newBalance);
    showMessage("Debited " + amount + " successfully.");

    var now = new Date().toLocaleString();
    printLastUpdated(now);

    clearAmount();
});