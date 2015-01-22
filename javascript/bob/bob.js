//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var regEx = /\?$/
  if (input === input.toUpperCase()) {
    return "Woah, chill out!"
   } else if (regEx.test(input)) {
    return "Sure."
   } else if (input === "") {
    eturn "Fine. Be that way!"
   }else {
    return "Whatever."
   }
};

module.exports = Bob;
