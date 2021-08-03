//Go into the website http://stanford.edu/~cpiech/karel/ide.html

// Make the robot move all the way to the last right hand + sign
function last_sign_top_right() {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();  
 }

 // Make karel to put the veeper in a diagonal way
 function putTheBeeper() {
    putBeeper();
    turnLeft();
    turnLeft();
    turnLeft();
 }
 
 function beeperMovement() {
    move();
    turnLeft();
    move();
 }
 
 function putBeeperDiagonal() {
    putBeeper();
    beeperMovement();
    putTheBeeper();
    beeperMovement();
    putTheBeeper();
    beeperMovement();
    putTheBeeper();
    beeperMovement();
    putTheBeeper();
    
 }
   
 // Make a chessboard using Karel
 function main(){
    //your code here
    putBeepereachTwoMoves();
    putBeepereachTwoMoves();
    beeperMovementLeft();
    putBeepereachTwoMoves();
    beeperMovementRight();
    putBeepereachTwoMoves();
    putBeepereachTwoMoves();
    beeperMovementLeft();
    putBeepereachTwoMoves();
    beeperMovementRight();
    putBeepereachTwoMoves();
    putBeepereachTwoMoves();
 }

 function moveTwoTimes() {
    move();
    move();
 }

 function beeperMovementLeft() {
    turnLeft();
    move();
    turnLeft();
    move();
 }
 
 function beeperMovementRight() {
    move();
    turnRight();
    move();
    turnRight();
 }
 
 function putBeepereachTwoMoves() {
    putBeeper();
    moveTwoTimes();
    putBeeper();
 }