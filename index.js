//  let num1 =8
//  let num2=4
//  document.getElementById("num1-el").innerText= num1
// document.getElementById("num2-el").innerText= num2

// let Add = num1 + num2
// function add (){
 
// let first = document.getElementById("addition")
//   first.innerText=Add;
//   add.innerText=sum-el

//  console.log(sum-el)

// }

// function subtract(){

// }

// function multiply(){

// }

// function divide(){


// }


let num1 = 8;
let num2 = 4;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

function add() {
  let sum = num1 + num2;
  let resultElement = document.getElementById("sum-el");
  resultElement.innerText = sum;

  console.log(sum);
}

function sub(){
  let sub = num1-num2
  let resultElement = document.getElementById("sum-el")
  resultElement.innerText = sub
  console.log(sub)
}