// create a function that can tell you how many characters you've written and how many do you have left

var paragraph = prompt("Compose your tweet!");

var length_written = paragraph.length;
var length_goal = 150

var length_limited = length_goal - length_written

console.log("You've written " + length_written + " words, you need to write " + length_limited + " characters more!");