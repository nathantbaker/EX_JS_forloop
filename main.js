

// Write a `for` loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use `console.log()` to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

console.log("start at 5, increase by 10 and stop greater than 120");
console.log("####################");  

for (var i = 5; i < 120; i += 10) {
  console.log(i);
}

// Write a `for` loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use `console.log()` to output its value every time. When the counter variable's value is 1, stop execution.

console.log("2nd problem");
console.log("####################");

for (var i = 4096; i !== .5; i /= 2) {
  console.log(i);
}

// Create an array that contains the names of American Presidents. Loop over that array with a `for` loop, and use string concatenation with `console.log()` to output the order and name of each President (see example below).

console.log("President problem");
console.log("####################");

var presidents = ["pres1", "pres2", "pres3"];

for (var i = 0; i < presidents.length; i++) {
  console.log("The #" + (i + 1) + " president was " + presidents[i]);
}

// Use can use another kind of `for` loop to [iterate over objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). Iterate over the object below and use `console.log()` to output the names of the keys in the object.

console.log("For In Loop problem");
console.log("####################");


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var anttype in antSpecies) {
  console.log("Ant Species: " + anttype);
}

// For in loop -- declare a variable that holds one of the properties in an objects and keeps going down...