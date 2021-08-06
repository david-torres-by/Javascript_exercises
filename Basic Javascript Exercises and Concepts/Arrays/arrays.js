//Check if you're invited to the party!

var guest_list = ["David", "Jose", "Iggy"];
var yourname = prompt("Tell me your name");

if(guest_list.includes(yourname)) {
  alert("Welcome " + yourname + "!");
} else {
  alert("Sorry, " + yourname + " you're not invited");
}
