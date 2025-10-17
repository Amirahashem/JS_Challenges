//Question 1
// let start = 10;
// let end = 100;
// let exclude = 40;


// for(let i = start; i <= end; i+=start) {
//   if(i === exclude) continue;
//     console.log(i)
// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// ---------------------------------

//Question 2
// let start = 10;
// let end = 0;
// let stop = 3;


// for(let i = start; i >= end; i--) {
//   if(i < 10){
//     console.log((`0${i}`));
//   }else{
//     console.log(i);
//   }
//   if(i === stop) break;
// }

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
// -----------------------------------------------



//Question 3
// let start = 1;
// let end = 6;
// let breaker = 2;


// for(let i = start; i <= end; i++) {
//   console.log(i);
//   for(let j = ++start; j <= breaker*breaker; j+=2) {
//     console.log(`-- ${j}`);
//   }
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// ------------------------------------



//Question 4
// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
//   console.log(index);
//   index-=2;
//   if(index === jump) break;
// }

// // Output
// 10
// 8
// 6
// 4
// ----------------------------



//Question 5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"

// let j = a.lenght;

// for(let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
//   if(friends[i].charAt(0) === letter.toUpperCase()) {
//     continue;
//   }
//   console.log(`${j} => ${friends[i]}`);
//   j++;
// }
// -----------------------------------------


//Question 6
// let start = 0;
// let swappedName = "elZerO";

// // Output
// // "ELzERo"

//   let myName = [];

// for(let i = start; i < swappedName.length; i++) {
//   if(swappedName[i] === swappedName[i].toLowerCase()) {
//     myName.push(swappedName[i].toUpperCase());
//   }else {
//     myName.push(swappedName[i].toLowerCase());
//   }

// }

// console.log(myName.join(""));
// ---------------------------------------------



//Question 7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// // Output
// 2
// 3
// 4


for(let i = ++start; i < mix.length; i++) {
  if(typeof mix[i] === "string") continue;
  console.log(mix[i]);
}
// ---------------------------------------------




