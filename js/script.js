// Contact Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please fill out all fields.";
        return;
      }

      // Simple feedback without a backend
      responseMessage.style.color = "green";
      responseMessage.textContent = "Thank you for contacting us!";
      form.reset();
    });
  }
});
