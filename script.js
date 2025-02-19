const tipAmount = document.querySelector(".amount");
const totalPrice = document.querySelector(".total-price");
const billInput = document.querySelector("#bill-input");
const numberPeople = document.querySelector("#people-number");
const tipPercentage = document.querySelector("#tip-percentage");
const customInput = document.querySelector(".custom");

function calculateTip(x) {
  let amount = (billInput.value * x) / 100;
  tipAmount.innerText = `$${amount.toFixed(2)}`;
  totalPrice.innerText = `$${(amount * numberPeople.value).toFixed(2)}`;
}

function reset() {
  tipAmount.innerText = "$0";
  totalPrice.innerText = "$0";
  billInput.value = "";
  numberPeople.value = "";
  customInput.value = "";
}

customInput.addEventListener("input", () => {
  calculateTip(customInput.value);
  tipAmount.innerText = `$${amount.toFixed(2)}`;
  totalPrice.innerText = `$${(amount * numberPeople.value).toFixed(2)}`;
});
