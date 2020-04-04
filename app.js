'use strict';



var userName = prompt('What is your name?');
 
    alert('Welcome to my page ' + userName + '!');

var Questions = 7;
var correctAnswers = 0;
var numberOfGuesses = 0;

function college() {
  var wentToCollege = prompt('Has Dave gone to college ' + userName +'?' + ' Y or N').toUpperCase();
  if(wentToCollege === 'Y' ) {
    alert('Yes, ' + userName + ' , Dave did go to college.');
    correctAnswers++
  } else {
    
    alert('Actually ' + userName + ' Dave did go to college.');
  }
}

function industry() {
  var workedIndustry = prompt('Has Dave worked in the tech industry ' + userName +'?' + ' Y or N').toUpperCase();
  if(workedIndustry === 'Y') {
    alert('Yes, ' + userName + ' , Dave has worked in the industry.');
    correctAnswers++
  } else {
    sole.log('Actually, ' + userName + ' , Dave has worked in the tech industry.');
    alert('Actually, ' + userName + ' , Dave has worked in the tech industry.');
  }
}

function enjoy() {
  var enjoyCodeFellows = prompt('Is Dave enjoying Code Fellows ' + userName +'?' + ' Y or N').toUpperCase();
  if(enjoyCodeFellows === 'Y') {
      alert('Yes, ' + userName + ' ,  Dave is enjoying Code Fellows.');
    correctAnswers++
  } else {
      alert('Actually, ' + userName + ' , Dave is enjoying Code fellows.');
  }
}

function develop() {
  var jsDeveloper = prompt('Is Daves goal to become a JavaScript Developer, ' + userName +'?' + ' Y or N').toUpperCase();
  if(jsDeveloper === 'Y') {
      alert('Yes ' + userName + ' , Daves goal is to become a JavaScript Developer.');
    correctAnswers++
  } else {
      alert('Actually, ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  }
}

function numberGame() {
  var numberAnswer = Math.floor(Math.random() * 100);
  console.log('Number is ' + numberAnswer);
  var guessNumber = prompt('Please guess a number between 1 and 100.');

  var i = 0
  var gotIt
  var tooHighLow

  while (i < 4){
    guessNumber = Number(guessNumber);
    if (guessNumber === numberAnswer){
      gotIt = true
    } else if (guessNumber > numberAnswer){
      tooHighLow = 'too high';
    } else if (guessNumber < numberAnswer){
      tooHighLow = "too low";
    }

    if(gotIt){
      alert('Awesome ' + userName + '!! ' + numberAnswer + ' is correct.');
      i = 4;
      correctAnswers++
    } else if (i < 3){
      guessNumber = prompt('I\'m sorry you\'ve guessed a number that is ' + tooHighLow + ' , Please try again.');
    } else {
      alert('Awww! You didn\'t guess it. I was thinking of ' + numberAnswer + '!')
    }
    i++
  }
}

function petGame() {
  var myPets = ['dog', 'cat', 'snake', 'mouse', 'fish', 'hamster'];

  var guessPets = prompt('I\'ve had a number of pets throughout my life. Can you guess what one of them was?').toLowerCase();
  var petIndex = 0
  for (petIndex = 0; petIndex < 5; petIndex++){
    if (guessPets === myPets[0] || guessPets === myPets[1] || guessPets === myPets[2] || guessPets === myPets[3] || guessPets === myPets[4] || guessPets === myPets[5]){
      alert('Yes! I had a ' + guessPets + '.')
      correctAnswers++
      break;
    } else {
      guessPets = prompt('Nope! I never had a ' + guessPets + '.' + 'Why don\'t you try again?');
    } 
  }
  alert('The pets I\'ve had are ' + myPets);
}
  
college();
industry();
enjoy();
develop();
numberGame();
petGame();


alert('Thank you ' + userName + ', you got ' + correctAnswers + 'out of ' + Questions + '!');






