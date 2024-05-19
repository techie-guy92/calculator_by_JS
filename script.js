var display = document.getElementById("display");
var currentInput = "";


function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function operation(operator) {
    currentInput += " " + operator + " ";
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function negate() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.substring(1);
    } else {
        currentInput = '-' + currentInput;
    }
    display.value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Error";
    }
}


var numButtons = document.getElementsByClassName("num");
for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", function() {
        var numValue = this.value;
        appendToDisplay(numValue);
    });
}


var divideBtn = document.getElementById("divide");
var multiplyBtn = document.getElementById("multiply");
var subtractBtn = document.getElementById("subtract");
var addBtn = document.getElementById("add");

divideBtn.addEventListener("click", function() {
    operation("/");
});

multiplyBtn.addEventListener("click", function() {
    operation("*");
});

subtractBtn.addEventListener("click", function() {
    operation("-");
});

addBtn.addEventListener("click", function() {
    operation("+");
});


var negateBtn = document.getElementById("negate");
negateBtn.addEventListener("click",negate)


var clearDisplayBtn = document.getElementById("clearDisplay")
clearDisplayBtn.addEventListener("click",clearDisplay)


var calculateBtn = document.getElementById("calculate")
calculateBtn.addEventListener("click",calculate)