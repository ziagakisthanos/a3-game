const options = ["rock", "paper", "scissors"];

function computerPlay(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
         return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a Tie!";
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playerPlay(){
    let input = false;
    while(input == false){
        const choice = prompt("Test your luck! Please type 'Rock', 'Paper' or 'Scissors'.");
        if(choice == null){
            confirm("Are you sure you want to exit?")
        }else if(
            (options.includes(choice))
        ){
        }else{
            alert("Please enter 'Rock' 'Paper' or 'Scissors'")
            continue;
        }
        const choiceInLower = choice.toLowerCase().trim();
        if(options.includes(choiceInLower)){
            input = true;
            return choiceInLower;
        } 
    }
}

function game(){
    let scorePlayer= 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log("You: "+ (playerSelection));
        console.log("Computer: "+ (computerSelection));
        console.log(playRound(playerSelection, computerSelection));
        console.log("---Round " + (i+1)  +" End---");
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("You beat the machine!")
    }
    else if(scorePlayer < scoreComputer){
        console.log("Machine won!")
    }
    else{
        console.log("It's a Tie...")
    }
}

game()