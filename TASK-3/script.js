let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        currentInput += op;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } 
    catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
