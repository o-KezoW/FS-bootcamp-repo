function sum(x, y) {
  return x + y;
}

console.log("Soma entre (1 + 2): " + sum(1, 2));

function compareNumbers(x, y) {
  return x - y;
}

x = 5;
y = 10;

// using ifs
if (((response = compareNumbers(x, y)), response < 0)) {
  console.log(x + " é menor que " + y + " por " + response + " valores");
} else if (((response = compareNumbers(x, y)), response > 0)) {
  console.log(x + " é maior que " + y + " por " + response + " valores");
} else {
  console.log(x + " é igual a " + y);
}

// using ternary operators
response = compareNumbers(x, y);
console.log(
  compareNumbers(x, y) < 0
    ? x + " é menor que " + y + " por " + response + " valores"
    : compareNumbers(x, y) > 0
    ? x + " é maior que " + y + " por " + response + " valores"
    : x + " é igual a " + y
);

// function
function superSum(from, upto) {
  var sum = 0;

  if (from > upto) {
    for (var i = upto; i <= from; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (var i = from; i <= upto; i++) {
      sum += i;
    }
  }

  return sum;
}

console.log(superSum(10, 1));

var day = Math.round(Math.random() * (7 - 1) + 1);
console.log(day)

switch (day) {
  case 1:
    day = "Domingo";
    break;
  case 2:
    day = "Segunda";
    break;
  case 3:
    day = "Terça";
    break;
  case 4:
    day = "Quarta";
    break;
  case 5:
    day = "Quinta";
    break;
  case 6:
    day = "Sexta";
    break;
  case 7:
    day = "Sábado";
    break;

  default:
    day = "Dia ínvalido";
    break;
}

console.log("Dia: " + day);
