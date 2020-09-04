hands = ['rock', 'paper', 'scissors'];




function getUChoice() {
  var rpsRadio = document.getElementsByName("rps");
    for( i = 0; i < rpsRadio.length; i++) {
      if(rpsRadio[i].checked)
        document.getElementById("uChoiceOut").innerHTML = `User Choice: ${rpsRadio[i].value}`;
    };
    return rpsRadio;

  // if{ uChoice === computerChoice;
  //   // then tie, play again
  // } else {


};

// function computerChoice() {
// choice=(math.floor(Math.random() * 3))
// if (choice === 1){
// console.log("rock");
// }
// };
// elseif (choice === 2){
// console.log("scissors");
// }
// else{
// console.log("paper")
// }
// //random function, choice between 3 hands.
// };

function render() {
    let htmlStr
};

function checkWinner() {

};

function displayWinner() {

};


function getRadioValue() {

};










render ();