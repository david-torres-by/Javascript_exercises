// Create a var that stores the name that user enters
var name = prompt("What is your name?");

// Capitalize the first letter
var first_letter = name.slice(0,1);
first_letter = first_letter.toUpperCase();

// I slice the first letter of the name to concatenate it later
name = name.slice(1,name.length);
name = name.toLowerCase()

// Concatenate the whole name
alert("Nice to meet you " + first_letter + name);