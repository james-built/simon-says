// global variables
var playerArray = [];
var computerArray = [];
var level = 3;
var score = 0;

function startGame() {
  document.getElementById('start').disabled = true; //disable button once game starts
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
      }, 500);
    }
  }
  timedEvent(0);
}
// store player inputs
function playerInput(value) {
  document.getElementById("audio"+value).play();
  document.getElementById(value).className = 'light animated';
  setTimeout(function(){document.getElementById(value).className = "light"}, 301);
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
  document.getElementById('score').textContent = 'Score: ' + score;
  if (score >= 500) {
    level = 4;
    document.getElementById('level').textContent = 'Level: ' + (level - 2);
  }
  if (score >= 1000) {
    level = 5;
    document.getElementById('level').textContent = 'Level: ' + (level - 2);
  }
  if (score >= 1500) {
    level = 6;
    document.getElementById('level').textContent = 'Level: ' + (level - 2);
  }
  if (score >= 2000) {
    level = 7;
    document.getElementById('level').textContent = 'Level: ' + (level - 2);
  }
  // play a win sound?
  setTimeout(startGame(), 4000); // loop game
} else {
  alert('Simon didn\'t say that! \n' + document.getElementById('score').textContent);
  playerArray  = [];
  computerArray = [];
  level = 3;
  score = 0;
  document.getElementById('score').textContent = 'Score: 0'
  document.getElementById('level').textContent = 'Level: 1'
  document.getElementById('start').disabled = false; //re-enable start button
}
}

function getComputerArray() {
  for (let i = 0; i < level; i++) {
    computerArray.push((Math.floor(Math.random() * 8) + 1));
  }
  console.log(computerArray);
  return computerArray;
}

function fireLight(num) {
  document.getElementById(num).className = 'light animated';
  setTimeout(function(){document.getElementById(num).className = "light"}, 301);
  document.getElementById("audio"+num).play();
}