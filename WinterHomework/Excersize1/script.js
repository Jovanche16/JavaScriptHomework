$(document).ready(function () {
    let display = $("#display");
    let currentValue = "0"; // Start with 0
    let previousValue = "";
    let operator = "";

    function updateDisplay(value) {
        // Check for error state
        if (value === "ERROR") {
            display.val("ERROR");
        } else {
            display.val(value);
        }
    }

    function handleError() {
        updateDisplay("ERROR");
        currentValue = "0";
        previousValue = "";
        operator = "";
    }

    $(".clear").on("click", function () {
        currentValue = "0";
        previousValue = "";
        operator = "";
        updateDisplay(currentValue);
    });

    $(".clc").on("click", function () {
        let value = $(this).val();

        if (currentValue === "0" || currentValue === "ERROR") {
            currentValue = value;
        } else {
            currentValue += value;
        }

        updateDisplay(currentValue);
    });

    $(".operator").on("click", function () {
        if (previousValue === "") {
            previousValue = currentValue;
            currentValue = "0";
        } else {
            if (operator) {
                calculateResult();
            }
            previousValue = currentValue;
            currentValue = "0";
        }
        operator = $(this).val();
    });

    $(".result").on("click", function () {
        calculateResult();
        operator = "";
        previousValue = "";
    });

    function calculateResult() {
        let result;

        let num1 = parseFloat(previousValue);
        let num2 = parseFloat(currentValue);

        if (Math.abs(num1) > 1e12 || Math.abs(num2) > 1e12) {
            handleError();
            return;
        }

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                handleError();
                return;
            } else {
                result = num1 / num2;
            }
        }

        if (result === Infinity || isNaN(result)) {
            handleError();
        } else {
            currentValue = result.toString();
            updateDisplay(currentValue);
        }
    }
});
