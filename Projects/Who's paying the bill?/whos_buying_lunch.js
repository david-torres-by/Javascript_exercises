/* 
You're going to select a random name from a list of names. 
The person selected will pay for everybody's food bill.
*/ 

var name_list= ["Jotaro", "Polnareff", "Avdol", "Iggy", "Kakyoin"];

function whosPaying(name_list) {
    var RandomNumber = Math.random();
    RandomNumber = RandomNumber * name_list.length
    RandomNumber = Math.floor(RandomNumber);
    var pickingRandomName = name_list.splice(RandomNumber, 1)
    //var gettingName = 
    console.log(pickingRandomName[0])
}

whosPaying(name_list);

/*
function whosPaying(name_list) {
    var randomNumber = Math.random();
    randomNumber = randomNumber * name_list.length
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);
    var pickingRandomName = name_list[randomNumber];
    var gettingName = name_list.pop(pickingRandomName);
    consoloe.log(gettingName)
}

whosPaying(name_list); 

*/