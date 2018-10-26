// 1.
function test(x, y) {
  return y - x;
}
test(10, 40); // returns 30

// 2.
function test(x) {
  return x * 2;
  console.log(x);
  return x / 2;
}
test(40); // returns 80

// write a function isEven() which takes a single numerica arguement and returns true if the number is even, and false otherwise
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(4); // true
isEven(21); // false
isEven(68); // true
isEven(333); // false

// write a function factorial() which takes a single numeric arguement and returns the factorial of that number
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
factorial(5); // 120
factorial(2); // 2
factorial(10); // 3628800
factorial(0); // 1

// write a function kebabToSnake() which takes a single kebab-cased sring arguement and returns the snake_cased version
function kebabToSnake(string) {
  var newString = string.replace(/-/g, "_"); // anything between / / will be replaced with second parameter
  return newString;
}
