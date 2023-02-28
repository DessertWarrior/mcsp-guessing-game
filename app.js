var answer =33;
var guesses = [];
var guessNum;
var user = [];
var previousUser= false;
var newUser = prompt('User');
if (user.indexOf(newUser) === -1)
        user.push(newUser);
    else 
        previousUser = true;
while(true) {
    guessNum =prompt('Guess');
    guesses.push(guessNum);
    if (guessNum > answer)
    {
        alert(`Sorry, ${newUser}. Guess Lower.`);
    }
    else if (guessNum < answer)
    {
        alert(`Sorry, ${newUser}. Guess Higher.`);
    }
    else
    {
        alert(`That's Correct ${newUser}! Your previous guesses were ${guesses.join(', ')}` );
        break;
    }
}
console.log(numofGuesses);