var answer =Math.floor(Math.random()*100)+1; //correct value Global
var user = {};  //player list Global
var newUser;
var guesses = [];  

function comparePlayerList(name)
{
    if (!user[name])
        user[name] = guesses.length;
    else 
        return true;
    return false;
}
function compareNumbers(num)
{
    if (num == answer)
    {
        if (comparePlayerList(newUser))
        {
            let diff = user[newUser] - guesses.length;
            if (diff > 0)
            {
                alert(`That’s Correct ${newUser}! And you beat your previous attempt by ${Math.abs(diff)} fewer guesses!`);
                user[newUser] = guesses.length;
            }
            else if (diff < 0)
                alert(`${newUser}, you can do better next time. Your best attempt is ${user[newUser]} guesses!`);
            else
                alert(`${newUser}, you have same attempt number as your previous best attempt.`);
            return true;
        }
        else
            alert(`That's Correct ${newUser}! Your previous guesses were ${guesses.join(', ')}` );
        return true;
    }
    else if (num > answer)
        alert(`Sorry, ${newUser}. Guess Lower.`);
    else if (num < answer)
        alert(`Sorry, ${newUser}. Guess Higher.`);
    else 
        alert(`Please Input correct data type!`);
    return false;
}
function playAgain()
{
    if (prompt('Play again?(Yes or No)').toUpperCase().trim()== 'YES')
        return true;
    return false;
}
 

let guessNum = -1;
let isPlayAgain = '';
do {
    newUser = prompt('User');
    guesses = [];
    do {
        guessNum =prompt('Guess');
        guesses.push(guessNum);
        console.log(answer);
    } while (!compareNumbers(guessNum))
} while (playAgain())