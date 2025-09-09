// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("active");
});
