const resultField = document.getElementById("result");
const operators = ["/", "*", "+", "-"];

function insert(num) {
    resultField.innerText += num;
}

function clearResult() {
    resultField.innerText = "";
}

function calculate() {
    let lista = resultField.innerText.split("");
    let operatorIndex;
    let firstParcel;
    let lastParcel;

    operators.map(function (operador) {
        let index = lista.indexOf(operador);
        if (index != -1) {
            operatorIndex = index;
        }
    });

    firstParcel = Number(lista.slice(0, operatorIndex).join(""));
    lastParcel = Number(lista.slice(operatorIndex + 1, lista.length).join(""));
    operator = lista[operatorIndex];

    let result;

    switch (operator) {
        case "+":
            result = firstParcel + lastParcel;
            break;
        case "-":
            result = firstParcel - lastParcel;
            break;
        case "/":
            result = firstParcel / lastParcel;
            break;
        case "*":
            result = firstParcel * lastParcel;
            break;
    }

    resultField.innerText = result;
}

function erase() {
    resultField.innerText = resultField.innerText.substring(
        0,
        resultField.innerText.length - 1
    );
}