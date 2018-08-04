// global variables
var playerArray = [];
var computerArray = [];
var level = 4;

function startGame() {
// get array for game
getComputerArray();
// play through array on board
for (let i = 0; i < computerArray.length; i++) {
  fireLight(i);
}
// listen for player input and compare
}

function playerInput(value) {

}

function getComputerArray() {
  var computerArray = [];
  for (let i = 0; i < level; i++) {
    computerArray.push((Math.floor(Math.random() * 8) + 1));
  }
  return computerArray;
}

function fireLight() {
  
}