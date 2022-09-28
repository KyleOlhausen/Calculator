let prevOperator;
let currValue = 0;
let prevValue;



const valueBtns = document.querySelectorAll(".val");
const opBtns = document.querySelectorAll(".op")
const clrBtn = document.querySelector(".clr");
const dltBtn = document.querySelector(".dlt");
const currDisplay = document.querySelector(".curr-calc");
const prevDisplay = document.querySelector(".prev-calc");
const equalBtn = document.querySelector(".equal");


valueBtns.forEach((button) => button.addEventListener('click', () => appendValue(button.textContent)));
opBtns.forEach((button) => button.addEventListener('click', () => setOperator(button.textContent)));
clrBtn.addEventListener('click', () => clear());
dltBtn.addEventListener('click', () => deleteValue());
equalBtn.addEventListener('click', () => calculate());



function setOperator(operator) {
    if(prevValue == null)
    {
        prevValue = currValue;
        prevDisplay.textContent = prevValue + operator;
    }
    else if(currValue == null){
        prevDisplay.textContent = prevValue + operator;
    }
    else {
        prevValue = operate(prevOperator, parseFloat(prevValue), parseFloat(currValue));
        prevDisplay.textContent = prevValue + operator;
    }
    prevOperator = operator;
    currDisplay.textContent = "";
    currValue = null;
}


function calculate() {
    prevDisplay.textContent += currValue + "=";
    prevValue = operate(prevOperator, parseFloat(prevValue), parseFloat(currValue));
    currDisplay.textContent = prevValue;
    currValue = null;
}

function deleteValue() {
    currValue = currValue.slice(0, currValue.length-1);
    currDisplay.textContent = currValue;
}

function clear() {
    currValue = 0;
    currDisplay.textContent = "";
    prevValue = null;
    prevDisplay.textContent = "";
}



function appendValue(value) {
    if(currDisplay.textContent.toString().length < 12){
        if(currDisplay.textContent === "Error"){
            currDisplay.textContent = "";
        }
        currDisplay.textContent += value;
        currValue = currDisplay.textContent;
    }
    else{
        currDisplay.textContent = "Error";
    }
}




//OPERATIONS
const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
   return a * b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(operator, a, b){
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            if(b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}