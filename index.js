const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nestedLinks = document.querySelectorAll(".nested-links");

openMenu.addEventListener("click", () => {
  openMenu.closest("aside").classList.add("show-menu");
});

closeMenu.addEventListener("click", () => {
  closeMenu.closest("aside").classList.remove("show-menu");
});

nestedLinks.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.closest(".nested-links").classList.toggle("show");
  });
});
