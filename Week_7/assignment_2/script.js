let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// // Output
// "1 => Sayed"
// "2 => Mahmoud"

let k = 1;
while(index < friends.length) {
  index++;
  if(typeof friends[index-1] === "number" || friends[index-1][0] === "A") {
    continue;
  }
  console.log(`${k++} => ${friends[index-1]}`);

}
