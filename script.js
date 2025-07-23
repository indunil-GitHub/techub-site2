document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload
    alert("Thank you for contacting TecHub! We will reply soon.");
    form.reset(); // Clear the form
  });
});
