// Quantity control
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");

plus.addEventListener("click", () => {
  quantity.value = parseInt(quantity.value) + 1;
});

minus.addEventListener("click", () => {
  if (quantity.value > 1) quantity.value = parseInt(quantity.value) - 1;
});

// Copy coupon
const copyBtn = document.getElementById("copyBtn");
const coupon = document.getElementById("coupon");

copyBtn.addEventListener("click", () => {
  coupon.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});
