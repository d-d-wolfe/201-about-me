'use strict';

var userName = prompt('What is your name?');
//console.log(userName)
  alert('Welcome to my page ' + userName + '!')

var Questions = 7;
var correctAnswers = 0;
var numberOfGuesses = 0;

var wentToCollege = prompt('Has Dave gone to college ' + userName +'?' + ' Y or N').toUpperCase();
if(wentToCollege === 'Y' ) {
// console.log('Yes, ' + userName + ' , Dave did go to college.');
  alert('Yes, ' + userName + ' , Dave did go to college.');
  correctAnswers++
} else {
 // console.log('Actually ' + userName + ' Dave did go to college.');
  alert('Actually ' + userName + ' Dave did go to college.');
}


var workedIndustry = prompt('Has Dave worked in the tech industry ' + userName +'?' + ' Y or N').toUpperCase();
if(workedIndustry === 'Y') {
 // console.log('Yes, ' + userName + ' , Dave has worked in the industry.');
  alert('Yes, ' + userName + ' , Dave has worked in the industry.');
  correctAnswers++
} else {
 // console.log('Actually, ' + userName + ' , Dave has worked in the tech industry.');
  alert('Actually, ' + userName + ' , Dave has worked in the tech industry.');
}

var enjoyCodeFellows = prompt('Is Dave enjoying Code Fellows ' + userName +'?' + ' Y or N').toUpperCase();
if(enjoyCodeFellows === 'Y') {
//  console.log('Yes, ' + userName + ' , Dave is enjoying Code Fellows.');
  alert('Yes, ' + userName + ' ,  Dave is enjoying Code Fellows.');
  correctAnswers++
} else {
//  console.log('Actually, ' + userName + ' , Dave is enjoying Code fellows.');
  alert('Actually, ' + userName + ' , Dave is enjoying Code fellows.');
}

var jsDeveloper = prompt('Is Daves goal to become a JavaScript Developer, ' + userName +'?' + ' Y or N').toUpperCase();
if(jsDeveloper === 'Y') {
//  console.log('Yes ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  alert('Yes ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  correctAnswers++
} else {
//  console.log('Actually, ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  alert('Actually, ' + userName + ' , Daves goal is to become a JavaScript Developer.');
}
//Guessing game. Ask user to guess number between 1-100. If answer is too high, say so and prompt to try again. If answer is too low, say so and prompt to try again. Max of 5 tries.
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

var myPets = ['dog', 'cat', 'snake', 'mouse', 'fish', 'hamster'];

var guessPets = prompt('I\'ve had a number of pets throughout my life. Can you guess what one of them was?').toLowerCase();

for (i = 0; i < 5; i++){
  if (guessPets === myPets[0] || guessPets === myPets[1] || guessPets === myPets[2] || guessPets === myPets[3] || guessPets === myPets[4] || guessPets === myPets[5]){
    alert('Yes! I had a ' + guessPets + '.')
      //console.log('Yes! I had a ' + guessPets + '.')
      correctAnswers++
      break;
  } else {
    guessPets = prompt('Nope! I never had a ' + guessPets + '.' + 'Why don\'t you try again?');
  } 
}

alert('The pets I\'ve had are ' + myPets)

alert('Thank you ' + userName + ', you got ' + correctAnswers + 'out of ' + Questions + '!')
//create variable to hold the score [x] line 16
//keep track of correct answers []
//calculate total []
//send an alert telling user how many correct answers []




