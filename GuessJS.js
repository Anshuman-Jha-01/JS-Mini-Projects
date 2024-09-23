let max = parseInt(prompt("Enter the maximum range"));
let rand = (Math.floor(Math.random()*max))+1;
let answer = parseInt(prompt("Please enter your guess"));
while(true)
{
    if (answer == rand)
    {
        console.log("Correct answer");
        break;
    }
    else if (answer<rand)
    {
        console.log("Your guess is smaller than the number");
    }
    else 
    {
        console.log("Your guess is larger");
    }
    if(answer==0)
    {
        console.log("Exiting the game");
        break;
    }
    answer = parseInt(prompt("Please enter your guess"));
}
