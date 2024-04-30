"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city)
  console.log(state);
  console.log(zip);

}

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum).value;
}

function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  console.log(changeDue);

  if (amountPaid < totalDue) {
    let message = "Unpaid balance of " + changeDue;
  }
  console.log(message);
}

displayMailingLabel();
