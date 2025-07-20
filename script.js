// Update footer year automatically
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true,
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // If the email input isn't valid, show the browser's validation UI
      if (!emailInput.validity.valid) {
        emailInput.reportValidity();
        return;
      }

      // All good—go ahead and redirect
      window.location.href = "thankyou.html";
    });
  }

  // (Optional) remove any “invalid” styling once the user starts typing again
  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
      emailInput.classList.remove("is-invalid");
    }
  });
});

