/* For Loops Problem Set
1. print all numbers between -10 and 19
2. print all even numbers between 10 and 40
3. print all odd numbers between 300 and 333
4. print all numbers divisble by 5 and 3 between 5 and 50
*/

// 1.
for (var count = -10; count <= 19; count++) {
  console.log(count);
}
// 2.
for (var count = 10; count <= 40; count++) {
  if (count % 2 === 0) {
    console.log(count);
  }
}
// 3.
for (var count = 300; count <= 333; count++) {
  if (count % 2 !== 0) {
    console.log(count);
  }
}
// 4.
for (var count = 5; count <= 50; count++) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count);
  }
}
