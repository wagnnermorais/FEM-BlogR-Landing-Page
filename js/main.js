const hamburguer = document.querySelector("#hamburguer");
const mobileNav = document.querySelector("#mobile-navigation");
const productToggle = document.querySelector("#product-toggle");
const companyToggle = document.querySelector("#company-toggle");
const connectToggle = document.querySelector("#connect-toggle");
const productArrow = document.querySelector("#product-arrow");
const companyArrow = document.querySelector("#company-arrow");
const connectArrow = document.querySelector("#connect-arrow");
const productDrop = document.querySelector("#product-dropdown");
const companyDrop = document.querySelector("#company-dropdown");
const connectDrop = document.querySelector("#connect-dropdown");

hamburguer.addEventListener("click", mobileMenuToggle);

function mobileMenuToggle() {
  let button = document.getElementById("hamburguer-menu");

  button.src.match("/icon-hamburger.svg")
    ? (button.src = "/icon-close.svg")
    : (button.src = "/icon-hamburger.svg");

  button.src.match("/icon-close.svg")
    ? mobileNav.classList.remove("hide")
    : mobileNav.classList.add("hide");
}

function dropNavigation(menu, nav, button) {
  menu.addEventListener("click", () => {
    if (nav.classList.contains("hide")) {
      nav.classList.remove("hide");
      button.style.rotate = "180deg";
    } else {
      nav.classList.add("hide");
      button.style.rotate = "0deg";
    }
  });
}

function menuDrop() {
  dropNavigation(productToggle, productDrop, productArrow);
  dropNavigation(companyToggle, companyDrop, companyArrow);
  dropNavigation(connectToggle, connectDrop, connectArrow);
}

menuDrop();
