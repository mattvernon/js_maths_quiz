// variable to store correct answers
var rightanswers = 0;

// begin questions
var userAnswer1 = prompt("What is 1+1?");
if (parseInt(userAnswer1) === 2) {
  alert('That is correct!');
  rightanswers += 1;
} else {
  alert('Sorry, that answer is wrong.');
}

var userAnswer2 = prompt("What is 2+2?");
if (parseInt(userAnswer2) === 4) {
  alert('That is correct!');
  rightanswers += 1;
} else {
  alert('Sorry, that answer is wrong.');
}

var userAnswer3 = prompt("What is 3+3?");
if (parseInt(userAnswer3) === 6) {
  alert('That is correct!');
  rightanswers += 1;
} else {
  alert('Sorry, that answer is wrong.');
}

var userAnswer4 = prompt("What is 4+4?");
if (parseInt(userAnswer4) === 8) {
  alert('That is correct!');
  rightanswers += 1;
} else {
  alert('Sorry, that answer is wrong.');
}

var userAnswer5 = prompt("What is 5+5?");
if (parseInt(userAnswer5) === 10) {
  alert('That is correct!');
  rightanswers += 1;
} else {
  alert('Sorry, that answer is wrong.');
}

// log correct answers to console
console.log(rightanswers)

//score output
if (rightanswers > 0) {
  alert('Great! You finished the quiz. You got ' + rightanswers + ' questions correct.')
} else {
  alert('You finished the quiz. Sorry, but you suck and didnt get any correct.')
}

//prize output
if (rightanswers === 5) {
  alert('You earned the gold crown!');
} else if (rightanswers >= 3) {
  alert('You earned the silver crown!');
} else if (rightanswers >= 1) {
  alert('You earned the bronze crown!')
} else {
  alert('You really suck.')
}

console.log('quiz complete');
