

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    const expression = display.value;

    if (!expression) {
        return;
    }

    try {
        if (expression.includes('+')) {
            const numbers = expression.split('+');
            let result = 0;
            for (let num of numbers) {
                result += parseFloat(num) || 0;
            }
            display.value = result;
        }
        else if (expression.includes('-')) {
            const numbers = expression.split('-');
            let result = parseFloat(numbers[0]) || 0;
            for (let i = 1; i < numbers.length; i++) {
                result -= parseFloat(numbers[i]) || 0;
            }
            display.value = result;
        }
        else if (expression.includes('*')) {
            const numbers = expression.split('*');
            let result = 1;
            for (let num of numbers) {
                result *= parseFloat(num) || 1;
            }
            display.value = result;
        }
        else if (expression.includes('/')) {
            const numbers = expression.split('/');
            let result = parseFloat(numbers[0]) || 0;

            for (let i = 1; i < numbers.length; i++) {
                const divisor = parseFloat(numbers[i]);
                if (divisor === 0) {
                    display.value = "Error: Division by zero";
                    return;
                }
                result /= divisor;
            }
            display.value = result;
        }
        else {
            display.value = parseFloat(expression) || 0;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLastChar() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
