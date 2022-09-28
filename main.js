let currValue = 0;
let prevValue;


const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op")
const clrBtn = document.querySelector(".clr");
const dltBtn = document.querySelector(".dlt");
const currDisplay = document.querySelector(".curr-calc");
const prevDisplay = document.querySelector(".prev-calc");


numBtns.forEach((button) => button.addEventListener('click', () => appendNum(button.textContent)));
opBtns.forEach((button) => button.addEventListener('click', () => setOperator(button.textContent)));
clrBtn.addEventListener('click', () => clear());
dltBtn.addEventListener('click', () => deleteNum());




function setOperator(operator) {
    prevValue = currValue + operator;
    prevDisplay.textContent = prevValue;
    currDisplay.textContent = "";
}




function deleteNum() {
    //delete last digit in currdisplay and currvalue
}

function clear() {
    currDisplay.textContent = "";
    prevDisplay.textContent = "";
}



function appendNum(num) {
    if(currDisplay.textContent.toString().length < 12){
        if(currDisplay.textContent === "Error"){
            currDisplay.textContent = "";
        }
        currDisplay.textContent += num;
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