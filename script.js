"use strict";

document.addEventListener("DOMContentLoaded", start);

const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const operator = document.querySelectorAll("#operator");

const calculate = document.querySelector("#calculate");

function start() {
  firstNumber.value;
  secondNumber.value;
  operator.value;
  console.log(operator.value);

  //   option.value;
  calculate.addEventListener("click", clickCalculate);
}

function clickCalculate() {
  let firstNumberAsVal = parseInt(firstNumber.value);
  let secondNumberAsVal = parseInt(secondNumber.value);
  //   let optionAsVal = option.value;

  console.log(firstNumberAsVal, secondNumberAsVal);
  console.log(operator.value);

  if (operator.value == "add") {
    firstNumber.value = firstNumberAsVal + secondNumberAsVal;
    console.log(firstNumber.value);
  }
  if (operator.value == "sub") {
    firstNumber.value = firstNumberAsVal - secondNumberAsVal;
  }
  if (operator.value == "mul") {
    firstNumber.value = firstNumberAsVal * secondNumberAsVal;
  }
  if (operator.value == "div") {
    firstNumber.value = firstNumberAsVal / secondNumberAsVal;
  }

  secondNumber.value = "";

  //   document.querySelector("#results li").append(firstNumber.value);

  start();
}
