var events = require('events');
var util = require('util');

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function (mssg) {
//   console.log(mssg);
// })
//
// myEmitter.emit('someEvent','this is the message');


var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var maria = new Person('maria');
var pepe = new Person('pepe');

var people = [james,maria,pepe];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said ' + mssg);
  });
});


james.emit('speak','whats up');
