const resultField = document.getElementById("result");
const operators = ["/", "*", "+", "-"];

function insert(num) {
    resultField.innerText += num;
}

function clearResult() {
    resultField.innerText = "";
}

function calculate() {
    // Obtendo a expressão e inicializando variáveis
    let expression = resultField.innerText;
    let operatorIndex = -1;
    let firstParcel, lastParcel, operator;

    // Verificando se há mais de um operador na expressão
    let operatorCount = 0;
    operators.forEach(function (operador) {
        operatorCount += expression.split(operador).length - 1;
    });

    if (operatorCount !== 1) {
        resultField.innerText = "Erro na expressão";
        return;
    }

    // Encontrando o índice do operador na expressão
    operators.forEach(function (operador) {
        let index = expression.indexOf(operador);
        if (index !== -1) {
            operatorIndex = index;
            return;
        }
    });

    // Separando a expressão nos operandos e operador
    firstParcel = Number(expression.slice(0, operatorIndex));
    lastParcel = Number(expression.slice(operatorIndex + 1));

    operator = expression[operatorIndex];

    // Verificando divisão por zero
    if (operator === "/" && lastParcel === 0) {
        resultField.innerText = "Divisão por zero";
        return;
    }

    let result;

    // Realizando o cálculo com base no operador
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

    // Exibindo o resultado na tela
    resultField.innerText = result;
}

function erase() {
    // Removendo o último caractere da expressão
    resultField.innerText = resultField.innerText.slice(0, -1);
}