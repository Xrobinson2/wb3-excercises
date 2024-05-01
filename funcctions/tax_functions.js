"use strict";






function getSocSecTax(grossPay) {
  let taxRate = 6.2;
  let taxedIncome = grossPay * taxRate;

  console.log(taxedIncome);
}

function getMedicareTax() {
  let taxedIncome = grossPay * taxRate.tofixed(2);

  console.log(taxedIncome);
}

function getFederalTax() {
    
}

getSocSecTax(300000);
