// CODECADEMY JAVASCRIPT PRACTICE - ternary_operator assignment

// STARTING CODEBASE
let isLocked = false;

// Task 1 - Refactor, or edit, the first if...else block to use a ternary operator.

// Original if else statement
// if (isLocked) {
//     console.log('You will need a key to open the door.');
// } else {
//     console.log('You will not need a key to open the door.');
// }

// Using ternary operator
isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');


let isCorrect = true;

// Task 2 - Refactor the second if...else block to use a ternary operator.

// Original if else statement
// if (isCorrect) {
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// Using ternary operator
isCorrect ? console.log('Correct!') : 
console.log('Incorrect!');

let favoritePhrase = 'Love That!';

// Task 3 - Refactor the third if...else block to use a ternary operator.

//Original if else statement
if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
} else {
    console.log("I don't love that!");
}

// Using ternary opearator
favoritePhrase === 'Love That!' ? console.log('I love that!') : 
console.log("I don't love that!");