

















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