
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

const header = document.querySelector("header")
const logoImg = document.querySelector("#logo-img")

window.addEventListener("scroll", diminuiHeader);

function diminuiHeader() {
  if (window.pageYOffset > 0 && header.classList.contains("max")) {
      header.classList.remove("max");
      header.classList.add("min")};
    }

window.addEventListener("scroll", aumentaHeader);

function aumentaHeader() {
  if (window.pageYOffset == 0 && header.classList.contains("min")) {
    header.classList.add("max");
    header.classList.remove("min");
 }
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.style.display = 'block';
});