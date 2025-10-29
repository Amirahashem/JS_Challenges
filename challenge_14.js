let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [{ title: t1, age: a1, available: avl1, skills: [, c] },
  { title: t2, age: a2, available: avl2, skills: [, d] },
  { title: t3, age: a3, available: avl3, skills: [, l] }] = myFriends;
// Write Your Code Here

if (chosen === 1) {
  console.log(t1);
  console.log(a1);
  console.log(avl1 ? "Avaliable" : "Not Avalible");
  console.log(c);

} else if (chosen === 2) {
  console.log(t2);
  console.log(a2);
  console.log(avl2 ? "Avaliable" : "Not Avalible");
  console.log(d);
  
} else if (chosen === 3) {
  console.log(t3);
  console.log(a3);
  console.log(avl3 ? "Avaliable" : "Not Avalible");
  console.log(l);
}