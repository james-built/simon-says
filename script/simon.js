// global variables
var playerArray = [];
var computerArray = [];
var level = 4;
var score = 0;

function startGame() {
  playerArray = [];
  computerArray = [];
  // get array for game
  var currentArray = getComputerArray();
  // play through array on board on timer
  function timedEvent(counter){
    if (counter < currentArray.length){
      setTimeout(function() {
        fireLight(currentArray[counter]);
        counter++;
        timedEvent(counter);
      }, 600);
    }
    console.log("counter function end")
  }
  timedEvent(0);
}
// store player inputs
function playerInput(value) {
  playerArray.push(Number(value));
  if (playerArray.length === computerArray.length) {
    console.log('compare function')
    compareArrays();
  }
}
// compare two arrays and add score
function compareArrays() {
  console.log(playerArray);
  console.log(computerArray);
if (JSON.stringify(playerArray) === JSON.stringify(computerArray)) {
  score += 250;
  alert('you win');
  document.getElementById('score').textContent = 'Score: ' + score;
  // if (score > 750) {level = 6}
  // play a win sound?
  // restart game
  setTimeout(startGame(), 2000);
} else if (playerArray !== computerArray) {
  alert('you lose');
  //lose events
}
}


function getComputerArray() {
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