var x = 1;
var y = 1;

if (x > y) {
  console.log(x + " é maior que " + y);
} else if (x < y) {
  console.log(x + " é menor que " + y);
} else {
  console.log(x + " é igual a " + y);
}

x = 2;
y = 3;

// Ternary operator
var response = x > y ? "Maior" : x < y ? "Menor" : "Igual";
console.log(response);

// While (condition)
var currentNumber = 1;
var sumNumbers = 0;

while (currentNumber <= 10) {
  sumNumbers += currentNumber;
  currentNumber++;
}

console.log("'while' A soma resultou em: " + sumNumbers);

// Do while
currentNumber = 0;
sumNumbers = 0;

do {
  sumNumbers += currentNumber;
  currentNumber++;
} while (currentNumber <= 10);

console.log("'do while' A soma resultou em: " + sumNumbers);

currentNumber = 0;
sumNumbers = 0;

// For loop
for (currentNumber = 1; currentNumber <= 10; currentNumber++) {
  sumNumbers += currentNumber;
}

console.log("'for' A soma resultou em: " + sumNumbers);
