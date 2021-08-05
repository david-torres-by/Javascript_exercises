//Create a love calculator!

var name1 = prompt("What is your name?")
var name2 = prompt("What is your lover name?")
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
console.log("The name of " + name1 + " has a " + n + "% of compatibility with " + name2);

// Way to write it but with conditional statements

var name1 = prompt("What is your name?")
var name2 = prompt("What is your lover name?")
var n = Math.random();
loveScore = n * 100;
loveScore = Math.floor(n) + 1; //1-100

if(loveScore > 70) {
  alert("Your love score is " + loveScore + "%. You love each other like crazy!")
}

if(loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%.")
}
 
if(loveScore <= 30) {
  alert("Your love score is " + loveScore + "%. You going together like oil and water.")
  
}

function bmiCalculator(weight, height) {
    return Math.round(weight/(height**2))
}


// BMI Calculator with if statement
var bmi = bmiCalculator(65,1.65)
if (bmi > 24.9) {
    alert("Your BMI is " + bmi + ", so you are overweight")
}

if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Your BMI is " + bmi + ", so you have a normal weight")
}

if (bmi < 18.5) {
    alert("Your BMI is " + bmi + ", so you are underweight")
}
