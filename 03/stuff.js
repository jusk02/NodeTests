// WAY 1
// var counter = function (arr) {
//   return 'There are ' + arr.length + ' items.';
// };
//
// var adder = function (a,b) {
//   return `The sum of the numbers is ${a+b}`;
// };
//
// var pi = 3.142;
//
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// WAY 2
// module.exports.counter = function (arr) {
//   return 'There are ' + arr.length + ' items.';
// };
//
// module.exports.adder = function (a,b) {
//   return `The sum of the numbers is ${a+b}`;
// };
//
// module.exports.pi = 3.142;


// WAY 3
var counter = function (arr) {
  return 'There are ' + arr.length + ' items.';
};

var adder = function (a,b) {
  return `The sum of the numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
