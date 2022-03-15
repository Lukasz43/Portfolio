"use strict";

const buttonMain = document.querySelector(".button-main");
const lukaszH1 = document.querySelector(".lukasz-h1");
let bodyBackground = document.body;

buttonMain.addEventListener("click", function () {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomHex);
  document.body.style.backgroundColor = "#" + randomHex;
});
