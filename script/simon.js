// global variables
var playerArray = [];
var computerArray = [];
var level = 4;

function startGame() {
// get array for game
var currentArray = getComputerArray();
// play through array on board
for (let i = 0; i < currentArray.length; i++) {
  fireLight(currentArray[i]);
}
// listen for player input and compare

}

/* function playerInput(value) {

} */

function getComputerArray() {
  var computerArray = [];
  for (let i = 0; i < level; i++) {
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