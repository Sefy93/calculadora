let number = [];
let number1 = [];
let number2 = [];
let total = [];
let op = "";
key.click(function () {
  number.push(this.innerText);

  input.val(number.join(""));

  if (this.innerText == "+") {
    number1 = number;
    number1.pop();
    op = "+";
    input.val("");
    number = [];
  } else if (this.innerText == "-") {
    number1 = number;
    op = "-";
    input.val("");
    number = [];
  } else if (this.innerText == "x") {
    number1 = number;
    op = "x";
    input.val("");
    number = [];
  } else if (this.innerText == "/") {
    number1 = number;
    op = "/";
    input.val("");
    number = [];
  }
});

del.click(() => {
  number.pop();
  console.log(number);
  input.val(number.join(""));
});

result.click(() => {
  number2 = number;
  number = [];

  switch (op) {
    case "+":
      total =
        parseFloat(number1.reduce(convert)) +
        parseFloat(number2.reduce(convert));
      input.val(total);
      number.push(total);
      total = [];
      break;
    case "-":
      total =
        parseFloat(number1.reduce(convert)) -
        parseFloat(number2.reduce(convert));
      input.val(total);
      number.push(total);
      total = [];
      break;
    case "x":
      total =
        parseFloat(number1.reduce(convert)) *
        parseFloat(number2.reduce(convert));
      input.val(total);
      number.push(total);
      total = [];
      break;
    case "/":
      total =
        parseFloat(number1.reduce(convert)) /
        parseFloat(number2.reduce(convert));
      input.val(total);
      number.push(total);
      total = [];
      break;
  }
});

reset.click(() => {
  number = [];
  number1 = [];
  number2 = [];
  total = [];
  op = "";

  input.val("");
});

function convert(numero, n) {
  return numero + n;
}
