"use strict";

// Adding DOMContentLoaded, selecting button and adding event listener
document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertButton");
  convertButton.addEventListener("click", convertCurrency);
});

//Main function
// Selecting and storing values
function convertCurrency() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const convertedAmountField = document.getElementById("convertedAmount");

  // Storing exchange rate values
  const exchangeRates = {
    INR: { USD: 0.014, CAD: 0.018 },
    USD: { INR: 73.1, CAD: 1.26 },
    CAD: { INR: 56.0, USD: 0.79 },
  };

  // Validating and doing converter calculation
  if (!isNaN(amount)) {
    if (fromCurrency !== toCurrency) {
      const conversionRate = exchangeRates[fromCurrency][toCurrency];
      if (conversionRate) {
        const convertedAmount = (amount * conversionRate).toFixed(2);
        convertedAmountField.value = convertedAmount;
      } else {
        convertedAmountField.value = "Invalid conversion";
      }
    } else {
      convertedAmountField.value = amount.toFixed(2);
    }
  } else {
    convertedAmountField.value = "Invalid amount";
  }
}

// Name: Bhaumik Raja
// Student Number: 8844424
