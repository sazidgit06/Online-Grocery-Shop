const form = document.getElementById("shippingForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Your order has been placed successfully!");
});

document.querySelectorAll(".gateway button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".gateway button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
