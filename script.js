"use strict";
const minus = document.querySelectorAll(".minus");
// const minus2 = document.querySelector(".minus-2");
// const minus3 = document.querySelector(".minus-3");
// const minus4 = document.querySelector(".minus-4");

const plus = document.querySelectorAll(".plus");
// const plus2 = document.querySelector(".plus-2");
// const plus3 = document.querySelector(".plus-3");
// const plus4 = document.querySelector(".plus-4");

const para = document.querySelectorAll(".para");

const click = document.querySelectorAll("#click");
console.log(click);
// console.log(minus, plus, para);
/*
const para2 = document.querySelector(".para-2");
const para3 = document.querySelector(".para-3");
const para4 = document.querySelector(".para-4");

minus2.addEventListener("click", function (e) {
  minus2.classList.add("hidden");
  plus2.classList.remove("hidden");
  para2.classList.remove("hidden");
});

minus3.addEventListener("click", function (e) {
  minus3.classList.add("hidden");
  plus3.classList.remove("hidden");
  para3.classList.remove("hidden");
});

minus4.addEventListener("click", function (e) {
  minus4.classList.add("hidden");
  plus4.classList.remove("hidden");
  para4.classList.remove("hidden");
});

plus2.addEventListener("click", function (e) {
  minus2.classList.remove("hidden");
  plus2.classList.add("hidden");
  para2.classList.add("hidden");
});

plus3.addEventListener("click", function (e) {
  minus3.classList.remove("hidden");
  plus3.classList.add("hidden");
  para3.classList.add("hidden");
});

plus4.addEventListener("click", function (e) {
  minus4.classList.remove("hidden");
  plus4.classList.add("hidden");
  para4.classList.add("hidden");
});


for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function (e) {
    e.preventDefault();
    plus[i].classList.add("hidden");
    for (let j = 0; j < minus.length; j++) {
      minus[i].classList.remove("hidden");
    }
    for (let k = 0; k < para.length; k++) {
      para[i].classList.remove("hidden");
    }
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function (e) {
    e.preventDefault();
    minus[i].classList.add("hidden");
    for (let j = 0; j < plus.length; j++) {
      plus[i].classList.remove("hidden");
    }
    for (let k = 0; k < para.length; k++) {
      para[i].classList.add("hidden");
    }
  });
}
*/
plus.forEach((plusE, index) => {
  plusE.addEventListener("click", function (e) {
    e.preventDefault();
    plusE.classList.add("hidden");
    minus[index].classList.remove("hidden");
    para[index].classList.remove("hidden");
  });
});

minus.forEach((minusE, index) => {
  minusE.addEventListener("click", function (e) {
    e.preventDefault();
    minusE.classList.add("hidden");
    plus[index].classList.remove("hidden");
    para[index].classList.add("hidden");
  });
});
