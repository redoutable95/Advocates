const menu = document.querySelector(".header__menu");
const toggle = document.querySelector(".burger-toggle");
const headerBtn = document.querySelector(".header__button");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
  headerBtn.classList.toggle("active");
  body.classList.toggle("active");
});
