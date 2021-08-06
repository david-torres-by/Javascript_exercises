// The same Fizzbuss code but with while loop

var output = [];
var array_number = 1

function fizzBuzz() {

    while (array_number <= 100) {

        if (array_number % 3 == 0 && array_number % 5 != 0) {
            output.push("Fizz");
        } else if (array_number % 5 == 0 && array_number % 3 != 0) {
            output.push("Buzz");
        } else if (array_number % 3 == 0 && array_number % 5 == 0) {
            output.push("FizzBuzz!");
        } else {
            output.push(array_number);
        }
        array_number += 1;
    }
    console.log(output);
}

fizzBuzz();