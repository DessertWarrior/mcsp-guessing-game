let answer =33;//Math.floor(Math.random()*100)+1; //correct value Global
let user = {};  //player list Global
let newUser;
let guesses = [];  

function comparePlayerList(name)    //used to search if the user has records of played before
{
    if (!user[name])    //if object key not found create with value guesses.length
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
        }
        else
        {
            if (guesses.length == 1)
                alert(`Nice job ${newUser}! You only took 1 guess to find out the correct answer is ${answer}`);
            else {
                guesses.pop();
                alert(`That's Correct ${newUser}! Your previous guesses were ${guesses}!` );
            }
        }
        return true;
    }
    else if (num > answer)
        alert(`Sorry, ${newUser}. Guess Lower`);
    else if (num < answer)
        alert(`Sorry, ${newUser}. Guess Higher`);
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
 

do {
    let guessNum;
    newUser = prompt('User');
    guesses = [];
    do {
        guessNum =prompt('Guess');
        guesses.push(guessNum);
    } while (!compareNumbers(guessNum))
} while (playAgain())
