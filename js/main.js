const inputField = document.querySelector(".ghost");

document.addEventListener("click", toggleClass);

function toggleClass(event) {
  if (event.target.closest(".input1")) {
    inputField.classList.add('-active');
  }
  if (!event.target.closest(".input1")) {
    inputField.classList.remove('-active');
  }
}