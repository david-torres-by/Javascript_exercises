// The same Fizzbuss code but with for loop

var output = [];

function fizzBuzz() {

    for (var array_number = 1; array_number <= 100; array_number+=1) {

        if (array_number % 3 == 0 && array_number % 5 != 0) {
            output.push("Fizz");
        } else if (array_number % 5 == 0 && array_number % 3 != 0) {
            output.push("Buzz");
        } else if (array_number % 3 == 0 && array_number % 5 == 0) {
            output.push("FizzBuzz!");
        } else {
            output.push(array_number);
        }
    }
    console.log(output);
}

fizzBuzz();