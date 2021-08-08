// Create the Fibonacci sequence using JS

var sequence = [];
var numberSum = 0;
var previousLastNum = 0;
var lastNum = 0; 

function fibonacciGenerator(number) {
    for (var i = 0; i < number; i += 1) {
        // When the user tipes 0
        if (number === 1) {
            sequence.push(i)
        }
        //When the user tipes 1
        else if (number === 2) {
            //console.log(i)
            sequence.push(i)
        }
        else {
            if(i === 0) {
                previousLastNum = i
                sequence.push(i)
            }
            else if(i === 1 || lastNum === numberSum) {
                if(i === 1) {
                    lastNum = 1;
                    sequence.push(i);
                }
                else{
                    lastNum = numberSum;
                    numberSum = previousLastNum + lastNum;
                    sequence.push(numberSum);
                }
            }
            else {
                if(i === 2) {
                    numberSum = previousLastNum + lastNum;
                    sequence.push(numberSum)
                    previousLastNum = lastNum
                }
                else {
                    //console.log("here")
                    lastNum = numberSum;
                    numberSum = previousLastNum + lastNum;
                    sequence.push(numberSum)
                    previousLastNum = lastNum
                }
            }
        }
    }   
    return console.log(sequence)
}

fibonacciGenerator(8);

// Another explanation

function fibonnacci2(n) {
    if(n===1) {
        output = [0];
    }
    else if(n === 2) {
        output = [0,1];
    }
    else {
        output = [0,1 ];
        for (var i = 2; i < n; i+=1){
            output.push(output[output.length - 2 + output[output.length - 1]]);
        }
    }

    return output;
}