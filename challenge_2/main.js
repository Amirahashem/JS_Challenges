/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+]  [+b++] [+] [+c++] [-] [+a++]
  [++a]
  - Value:  11
  - Explain: Pre Increment
  [+]
  - Explain: Add Operator
  [+b++]
  - Value:  20
  - Explain: Unary Plus + Post Increment
  [+]
  - Explain: Add Operator
  [+c++]
  - Value:  80
  - Explain: Unary Plus + Post Increment
  [-]
  - Explain: Subtract Operator
  [+a++]
  - Value: 11
  - Explain: Unary Plus + Post Increment
  -------------------------------------
  Result = 100
*/

console.log(++a + -b + +c++ - -a++ + +a);

/*
  [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
  [++a]
  - Value:  13
  - Explain: Pre Increment
  [+]
  - Explain: Add Operator
  [-b]
  - Value:  -21
  - Explain: Unary Negation
  [+]
  - Explain: Add Operator
  [+c++]
  - Value:  81
  - Explain: Unary Plus + Post Increment  
  [-]
  - Explain: Subtract Operator
  [-a++]
  - Value:  -13
  - Explain: Unary Negation + Post Increment
  [+]
  - Explain: Add Operator
  [+a]
  - Value: 14
  - Explain: Unary Plus
  -------------------------------------
  Result = 100
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [--c] [+] [+b] [*] [--a] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
  [--c]
  - Value:  81
  - Explain: Pre Decrement
  [+]
  - Explain: Add Operator
  [+b]
  - Value:  21
  - Explain: Unary Plus
  [*]
  - Explain: Multiply Operator
  [--a]
  - Value:  13
  - Explain: Pre Decrement
  [+b++]  
  - Value:  21
  - Explain: Unary Plus + Post Increment
  [-] 
  - Explain: Subtract Operator
  [+b]
  - Value:  22
  - Explain: Unary Plus
  [*] 
  - Explain: Multiply Operator
  [a]
  - Value:  13
  - Explain: Variable a Value
  [+]
  - Explain: Add Operator
  [--a]
  - Value:  12
  - Explain: Pre Decrement
  [-]
  - Explain: Subtract Operator
  [+true]
  - Value:  1
  - Explain: Unary Plus
  -------------------------------------
  Result = 100
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173