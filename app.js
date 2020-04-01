'use strict';

//ask users name
//return greeting "welcome to my page userName"
var userName = prompt('What is your name?');
//console.log(userName)
  alert('Welcome to my page ' + userName + '!')

//have you gone to college
//yes or no
var wentToCollege = prompt('Has Dave gone to college ' + userName +'?' + ' Y or N').toUpperCase();
//var wentToCollege2 = wentToCollege.toUpperCase
if(wentToCollege === 'Y' ) {
// console.log('Yes, ' + userName + ' , Dave did go to college.');
  alert('Yes, ' + userName + ' , Dave did go to college.');
} else {
 // console.log('Actually ' + userName + ' Dave did go to college.');
  alert('Actually ' + userName + ' Dave did go to college.');
}

//have you worked in the software industry
//yes or no
var workedIndustry = prompt('Has Dave worked in the tech industry ' + userName +'?' + ' Y or N').toUpperCase();
if(workedIndustry === 'Y') {
 // console.log('Yes, ' + userName + ' , Dave has worked in the industry.');
  alert('Yes, ' + userName + ' , Dave has worked in the industry.');
} else {
 // console.log('Actually, ' + userName + ' , Dave has worked in the tech industry.');
  alert('Actually, ' + userName + ' , Dave has worked in the tech industry.');
}

//Are you enjoying Code Fellows
//yes or no
//Im really enjoying it too userName
var enjoyCodeFellows = prompt('Is Dave enjoying Code Fellows ' + userName +'?' + ' Y or N').toUpperCase();
if(enjoyCodeFellows === 'Y') {
//  console.log('Yes, ' + userName + ' , Dave is enjoying Code Fellows.');
  alert('Yes, ' + userName + ' ,  Dave is enjoying Code Fellows.');
} else {
//  console.log('Actually, ' + userName + ' , Dave is enjoying Code fellows.');
  alert('Actually, ' + userName + ' , Dave is enjoying Code fellows.');
}

//Is your goal to become a JavaScript Developer like me?
//yes or no
var jsDeveloper = prompt('Is Daves goal to become a JavaScript Developer, ' + userName +'?' + ' Y or N').toUpperCase();
if(jsDeveloper === 'Y') {
//  console.log('Yes ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  alert('Yes ' + userName + ' , Daves goal is to become a JavaScript Developer.');
} else {
//  console.log('Actually, ' + userName + ' , Daves goal is to become a JavaScript Developer.');
  alert('Actually, ' + userName + ' , Daves goal is to become a JavaScript Developer.');
}