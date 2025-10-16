/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,--counter).reverse()); // ["Elham", "Mazero"]

console.log("El"+my[zero].slice(--counter)); // "Elzero"

console.log(my[zero][my.indexOf("Gamal")]+my[zero][my.indexOf("Ameer")].toUpperCase()); // "rO"