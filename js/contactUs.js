document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Success message
  alert("✅ Thank you for contacting us, " + name + "! We’ll get back to you soon.");

  // Reset form
  document.getElementById("contactForm").reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
