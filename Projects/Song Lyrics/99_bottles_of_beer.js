//Make the song of 99 bottles of beer using JS!

var bottles = 99

while (bottles !== 0) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.")
    bottles -= 1
    if (bottles >= 1) {
        console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.")
        console.log("")
    }
    else {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        console.log("")
    }
}

console.log("")
console.log("No more bottles of beer on the wall, no more bottles of beer.")
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")