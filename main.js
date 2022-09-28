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


//NUMBER BUTTONS
function appendValue(value) {
    
    switch (validate(value))
    {
        case 1:
            if(currDisplay.textContent === "Error"){
                currDisplay.textContent = "";
            }
            currDisplay.textContent += value;
            currValue = currDisplay.textContent;
            break;
        case -1:
            currDisplay.textContent = "Error";
            break;
        default:
            break;
    }
}

function validate(value) {
    if(currDisplay.textContent.length > 11) return -1;
    else if((currDisplay.textContent.includes(".") && value == ".") || (currDisplay.textContent == "0" && value == "0")) return 0;
    else{
        if(currDisplay.textContent == "0"){
            currValue = currValue.slice(0, 0);
            currDisplay.textContent = "";
        } 
        return 1;
    }
}

//OPERATIONS BUTTONS
function setOperator(operator) {
    if(prevValue == null)
    {
        prevValue = currValue;
        prevDisplay.textContent = prevValue + operator;
        prevOperator = operator;
        currDisplay.textContent = "";
        currValue = null;
    }
    else if(currValue == null){
        prevDisplay.textContent = prevValue + operator;
        prevOperator = operator;
        currDisplay.textContent = "";
        currValue = null;
    }
    else {
            prevValue = operate(prevOperator, parseFloat(prevValue), parseFloat(currValue));
            if(prevValue == null)
            {
                clear();
                currDisplay.textContent = "Error";
            }
            else{
                prevValue = roundNum(prevValue)
                prevDisplay.textContent = prevValue + operator;
                prevOperator = operator;
                currDisplay.textContent = "";
                currValue = null;
            }
    }
}

//EQUAL BUTTON
function calculate() {
    if(currValue!=null){
        prevDisplay.textContent += currValue + "=";
        prevValue = operate(prevOperator, parseFloat(prevValue), parseFloat(currValue));
        if(prevValue == null){
            clear();
            currDisplay.textContent = "Error";
        }
        else{
            prevValue = roundNum(prevValue)
            currDisplay.textContent = prevValue;
            currValue = null;
        }

    }
}

function roundNum(num){
    if(num > 0){
       return Math.round(num * 1000) / 1000; 
    }
    else {
        num = num * -1;
        return (Math.round(num * 1000) / 1000) * -1;
    }
}

//DELETE BUTTON
function deleteValue() {
    currValue = currValue.slice(0, currValue.length-1);
    currDisplay.textContent = currValue;
}

//CLEAR BUTTON
function clear() {
    currValue = 0;
    currDisplay.textContent = "";
    prevValue = null;
    prevDisplay.textContent = "";
    prevOperator = "";
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