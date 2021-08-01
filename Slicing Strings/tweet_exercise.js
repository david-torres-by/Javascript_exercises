// In here we're trying to create a tweet that is under 140 and if the user writes more, it will return 
// the alert with the string cut.

var paragraph = prompt("Compose your tweet!");
var tweet_length = paragraph.slice(0,140);
alert(tweet_length);
