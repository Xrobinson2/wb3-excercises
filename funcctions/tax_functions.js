"use strict";



function getSocSecTax(grossPay) {
  let taxRate = 0.062;
  let taxedIncome = grossPay * taxRate;

  console.log(taxedIncome);
}

getSocSecTax(27358);

function getMedicareTax(grossPay) {
  let medTaxRate = 0.0145;
  let netIncome = grossPay * medTaxRate;

  console.log(netIncome);
}

getMedicareTax(50000);

function getFederalTax(grossPay, withCode) {
  let taxRate;

  if (withCode == 0) {
    taxRate = 0.23;
  } else if (withCode == 1) {
    taxRate = 0.21;
  } else if (withCode == 2) {
    taxRate = 0.195;
  } else if (withCode == 3) {
    taxRate = 0.185;
  }
  if (withCode >= 4) {
    taxRate = 18 * ((withCode - 4) * 0.005);
  }
  
  let afterWithHolding = taxRate * grossPay
  
  return afterWithHolding
}

console.log(getFederalTax(750, 0))
console.log(getFederalTax(1550, 2))