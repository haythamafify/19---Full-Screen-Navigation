let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
toggle.onclick = function () {
  nav.classList.add("open");
};
close.onclick = function () {
  this.parentElement.classList.remove("open");
};
// document.body.parentElement

document.onkeyup=function (e) {
  if (e.key==="Escape") {
    nav.classList.remove("open");
  }
    
}