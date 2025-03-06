function calculate() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let resultsContainer = document.getElementById("result"); 

    if (isNaN(number1) || isNaN(number2)) {
        alert("Некорректны входные данные! Введите числа");
        return;
    }

    let result;
    switch (operator) {
        case "+": 
            result = number1 + number2; 
            break;
        case "-": 
            result = number1 - number2; 
            break;
        case "*": 
            result = number1 * number2; 
            break;
        case "/": 
            if (Math.abs(number2) < Number.EPSILON) {
                alert("Деление на ноль!");
                return; 
            }
            result = (number1 / number2).toFixed(5);
            break;
    }

    let previousResults = resultsContainer.getElementsByClassName("result-item");
    for (let i = 0; i < previousResults.length; i++) {
        previousResults[i].classList.add("old-result");
    }

    let newResult = document.createElement("div");
    newResult.classList.add("result-item");
    newResult.innerHTML = `<b>${number1} ${operator} ${number2} = ${result}</b>`;

    resultsContainer.append(newResult);

    while (resultsContainer.children.length > 2) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
}
