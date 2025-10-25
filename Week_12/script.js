// [Question 1]
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="js"]'));

console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll('[name="js"]')[0]);
console.log(document.querySelectorAll("#elzero")[0]);

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByName("js")[0]);

console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
// ================================================


// [Quesion 2]
let myImg = document.images;

for(let i = 0; i < myImg.length; i++) {
  // console.log(myImg[i]);
  myImg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myImg[i].alt = "Elzero Logo";
  // console.log(myImg[i]);
}
// =====================================================


// [Question 3]
let myInput = document.forms[0].children[0];
let result = document.forms[0].children[1];


myInput.onblur = function() {
  // console.log(this.value)
  result.innerHTML = `${this.value} USD Dollar = ${this.value * 50} Egyptian Pound`;
}
// =====================================================


// [Question 4]
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];

console.log(one);
console.log(two);

let oneTextContent = one.textContent;
let twoTextContent = two.textContent;

console.log(oneTextContent);
console.log(twoTextContent);


one.title = twoTextContent;
two.title = oneTextContent;

one.textContent = twoTextContent;
two.textContent = `${oneTextContent} 2`;



console.log(one);
console.log(two);
// =====================================================

// [Question 5]
let Imgs = document.images;

for(let i = 0; i < Imgs.length; i++) {
  if(Imgs[i].hasAttribute("alt")) {
    Imgs[i].setAttribute("alt", "Old");
  }else {
    Imgs[i].setAttribute("alt", "Elzero New");
  }
  console.log(Imgs[i]);
}
// =====================================================


// [Question 6]