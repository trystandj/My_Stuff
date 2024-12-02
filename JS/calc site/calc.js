const historyList = document.getElementById('history-list');
const equationInput = document.getElementById('equation');

let button = document.getElementById('calculateButton');

// Event listener for the Enter key
equationInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

function calculate() {
    const equation = equationInput.value;
    let result;
    try {
        // Use math.js to evaluate the equation
        result = math.evaluate(equation);
        
        document.getElementById('result').textContent = `Result: ${result}`;
       
        addToHistory(equation, result);

        equationInput.value = '';
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }

    let button = document.getElementById('calculateButton');
    if (button.textContent === "Calculate") {
        button.textContent = "Calculated";
        setTimeout(function () {
            button.textContent = "Calculate";
        }, 2000);
    }
}

function addToHistory(equation, result) {
    // Create a new div element for the history item
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
   
    historyItem.textContent = `${equation} = ${result}`;

    historyList.appendChild(historyItem);
}