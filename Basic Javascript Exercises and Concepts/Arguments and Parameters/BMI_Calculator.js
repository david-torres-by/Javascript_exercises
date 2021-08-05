// Create a BMI Calculator using JS Functions

//BMI = WEIGHT(KG) / HEIGHT**2(M**2)

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    return Math.round(weight/(height**2))
}

var bmi = bmiCalculator(70,1.65)
console.log(bmi)

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/