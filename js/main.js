const hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener("click", hideMenu);

function hideMenu() {
  let button = document.getElementById("hamburguer-menu");

  if (button.src.match("../public/icon-hamburger.svg")) {
    button.src = "../public/icon-close.svg";
  } else {
    button.src = "../public/icon-hamburger.svg";
  }
}
