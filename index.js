hands = ['Rock', 'Paper', 'Scissors'];




function getUChoice() {
  var rpsRadio = document.getElementsByName("rps");
    for( i = 0; i < rpsRadio.length; i++) {
      if(rpsRadio[i].checked)
       uCompare = document.getElementById("uChoiceOut").innerHTML = `User Choice: ${rpsRadio[i].value}`;
    };
        console.log(computerChoice(hands));
        computerChoice(hands);
        console.log(uCompare);
        return rpsRadio.value;

  // if{ uChoice === computerChoice;
  //   // then tie, play again
  // } else {


};

function computerChoice(hands) {
  hands = hands[Math.floor(Math.random()*hands.length)];
  let compChoice = hands;
return hands;
}




function checkWinner() {
  let userHand = getUChoice(uCompare);
  let compuHand = compChoice;
    if( userHand.includes("Rock") === true && compuHand === 'Paper'){
      console.log("You lost!");
      return "you lost";
    } else if( userHand.includes("Rock") === true && compuHand === 'Scissors') {
      console.log("You won!");
        return "you won";
    }  else if( userHand.includes("Paper") === true && compuHand === 'Scissors') {
      console.log("You lost!");
      return "you lost";
    }  else if( userHand.includes("Paper") === true && compuHand === 'Rock') {
      console.log("You won!");
      return "you won";
    }  else if( userHand.includes("Scissors") === true && compuHand === 'Paper') {
      console.log("You won!");
      return "you won";
    }  else if( userHand.includes("Scissors") === true && compuHand === 'Rock') {
      console.log("You lost!");
      return "you lost";
    } else {
      console.log("Tie!");
      return "Tie!";
      uCompare = document.getElementById("uChoiceOut").innerHTML = `User Choice: ${rpsRadio[i].value}`;
    };
};


function render() {
    let htmlStr
};

function displayWinner() {
  chkWinHtml = checkWinner();
  document.getElementById("dispWinner").innerHTML = `User Choice: ${chkWinHtml}`;


};


function getRadioValue() {

};










render ();