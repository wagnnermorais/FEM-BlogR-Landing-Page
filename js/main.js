const hamburguer = document.querySelector("#hamburguer");
const productToggle = document.querySelector("#product-toggle");
const companyToggle = document.querySelector("#company-toggle");
const connectToggle = document.querySelector("#connect-toggle");
const productDrop = document.querySelector("#product-dropdown");
const companyDrop = document.querySelector("#company-dropdown");
const connectDrop = document.querySelector("#connect-dropdown");

hamburguer.addEventListener("click", hideMenu);

function hideMenu() {
  let button = document.getElementById("hamburguer-menu");

  // prettier-ignore
  if (button.src.match("/icon-hamburger.svg")) return (button.src = "/icon-close.svg");
  return (button.src = "/icon-hamburger.svg");
}

function dropNavigation(menu, nav) {
  menu.addEventListener("click", () => {
    // nav.classList.remove("hide");
    if (nav.classList.contains("hide")) return nav.classList.remove("hide");
    return nav.classList.add("hide");
  });
}

function menuDrop() {
  dropNavigation(productToggle, productDrop);
  dropNavigation(companyToggle, companyDrop);
  dropNavigation(connectToggle, connectDrop);
}

menuDrop();
