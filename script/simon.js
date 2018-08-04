// global variables
var playerArray = [];
var computerArray = [];
var level = 4;
var score = 0;

function startGame() {
// get array for game
var currentArray = getComputerArray();
// play through array on board on timer
function timedEvent(counter){
  if(counter < currentArray.length){
    setTimeout(function(){
      fireLight(currentArray[counter]);
      counter++;
      timedEvent(counter);
    }, 600);
  }
}
timedEvent(0);

// listen for player input and compare

if (playerArray === computerArray) {
score += 250;
  if (score > 750) {level = 6}
// play a win sound?
setTimeout(startGame(), 2000);
} else {
  //lose events
}
}

/* function playerInput(value) {

} */

function getComputerArray() {
  var computerArray = [];
  for (let i = 0; i < level; i++) { //uses the level provided to set the array length
    computerArray.push((Math.floor(Math.random() * 8) + 1));
  }
  console.log(computerArray);
  return computerArray;
}

function fireLight(num) {
  console.log(document.getElementById(num))
  // set a css variable for the button to play animation
  // reset the css variable to default state
}