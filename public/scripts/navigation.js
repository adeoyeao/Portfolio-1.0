// Mobile Navigation
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
  const dropdown = document.createElement("div");
  const nav = document.querySelector("nav").cloneNode(true);
  document.querySelector(".dropdown") == null
    ? ((dropdown.className = "dropdown"),
      dropdown.appendChild(nav),
      document.querySelector("body").appendChild(dropdown),
      menuButton.classList.toggle("menu-close"))
    : (menuButton.classList.toggle("menu-close"),
      document.querySelector(".dropdown").remove());
});

export {menuButton}