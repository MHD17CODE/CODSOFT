document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  let currentInput = "";
  let expression = "";
  let resultDisplayed = false;

  function updateDisplay() {
    result.value = expression || "0";
  }

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      if ((buttonText >= "0" && buttonText <= "9") || buttonText === ".") {
        if (resultDisplayed) {
          expression = buttonText;
          resultDisplayed = false;
        } else {
          expression += buttonText;
        }
      } else if (
        buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "*" ||
        buttonText === "/"
      ) {
        expression += " " + buttonText + " ";
      } else if (buttonText === "=") {
        try {
          const evalResult = eval(expression);
          expression = evalResult.toString();
          resultDisplayed = true;
        } catch (error) {
          expression = "Error";
        }
      } else if (buttonText === "C") {
        expression = "";
        resultDisplayed = false;
      } else if (buttonText === "←") {
        if (expression.length > 0) {
          expression = expression.slice(0, -1);
        }
      }

      updateDisplay();
    });
  });

  updateDisplay();
});
