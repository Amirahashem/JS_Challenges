/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar","Amira"];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr>`);
for(let i = 0; i < myAdmins.indexOf("Stop"); i++) {
  let k =0;
    document.write(`<div>`)
    document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    for(let j = 0; j< myEmployees.length; j++) {
      if(myAdmins[i].charAt(0) === myEmployees[j].charAt(0)){
        document.write(`<p>${k+1} - ${myEmployees[j]}`);
        k++;
      }
    }
    document.write(`<hr>`);
    document.write(`<div>`);

}
