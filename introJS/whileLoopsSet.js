// While Loops Problem Set

/*
print all numbers between -10 and 19
print all even numbers between 10 and 40
print all odd number betweeen 300 and 333
print all numbrs divisible by 5 and 3 between 5 and 50
*/
// 1.
var num = -10;
while (num <= 19) {
  console.log(num);
  num++;
}

// 2.
var num = 10;
while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num += 2;
}

// 3.
var num = 300;
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num += 1;
}

// 4.
var num = 5;
while (num <= 50) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num);
  }
  num += 1;
}
