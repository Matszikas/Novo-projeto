const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    if(window.scrollY < 90){
        header.classList.toggle ("sticky");
    }
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle ("show-top", window.scrollY > 140)
    topo.classList.toggle ("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle ("hide-top");
}
   
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