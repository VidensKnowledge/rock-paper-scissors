hands = ['Rock', 'Paper', 'Scissors'];




function getUChoice() {
  var rpsRadio = document.getElementsByName("rps");
    for( i = 0; i < rpsRadio.length; i++) {
      if(rpsRadio[i].checked)
       uCompare = document.getElementById("uChoiceOut").innerHTML = `User Choice: ${rpsRadio[i].value}`;
    };
        console.log(computerChoice(hands));
        console.log(uCompare);
        return rpsRadio.value;

  // if{ uChoice === computerChoice;
  //   // then tie, play again
  // } else {


};

function computerChoice(hands) {
return hands[Math.floor(Math.random()*hands.length)]
}


function render() {
    let htmlStr
};

function checkWinner() {
  let userHand = getUChoice(uCompare);
  let compuHand = computerChoice(hands);
    if( userHand.includes("Rock") === true && compuHand === 'Paper'){
      console.log("You lost!");
    } else if( userHand.includes("Rock") === true && compuHand === 'Scissors') {
      console.log("You won!");
    }  else if( userHand.includes("Paper") === true && compuHand === 'Scissors') {
      console.log("You lost!");
    }  else if( userHand.includes("Paper") === true && compuHand === 'Rock') {
      console.log("You won!");
    }  else if( userHand.includes("Scissors") === true && compuHand === 'Paper') {
      console.log("You won!");
    }  else if( userHand.includes("Scissors") === true && compuHand === 'Rock') {
      console.log("You lost!");
    } else {
      console.log("Tie!");
    };
};


function displayWinner() {

};


function getRadioValue() {

};










render ();