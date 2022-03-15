"use strict";

const buttonMain = document.querySelector(".button-main");
const lukaszH1 = document.querySelector(".name");
const scrollTop = document.querySelector(".scrollTop");

let intViewportHeight = window.innerHeight;

let bodyBackground = document.body;

buttonMain.addEventListener("click", function () {
  // const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomHex);
  // document.body.style.backgroundColor = "#" + randomHex;
  window.scrollBy(0, intViewportHeight);
  console.log("1");
  console.log();
});

scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
  console.log("scroll top");
});
