const calculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "":
      result = "Enter an operator: +, -, * or /"
      break;
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      result = 'Operator Error'

  }

//   console.log(result);
  return result;
}

console.log(calculator(2,5,'+'))
