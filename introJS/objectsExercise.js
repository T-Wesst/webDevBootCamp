// 1.
var someObject = {};

//which is valid:
someObject._name = "Hedwig"; // valid
someObject.age = 6;  // valid
var prop = "color";
someObject[prop] = "red";  // valid
someObject.123 = true; // not valid

// 2.
// write code to retrieve "Malfroy" from someObject
var someObject = {
  friends: [
    {name: "Malfroy"},
    {name: "Crabbe"},
    {name: "Goyle"},
  ],
  color: "baby blue",
  isEvel: true
};

console.log(someObject.friends[0].name);
