/* Age Calculator

- ask users Age
- alerts users how long they've been alive

*/

var age = prompt("enter your age");
var days = age * 365.25; // accounts for leap year
var message = alert(age + " years is roughly " + days + " days");
