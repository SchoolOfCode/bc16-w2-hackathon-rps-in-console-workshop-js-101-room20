let username = ""

function getName () {
    username = prompt(`Welcome to Rock, Paper, Scissors! Please enter your name to start playing`)
    return username;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playersChoice, computerChoice, username) {
    if(playersChoice === computerChoice) {
    return `It's a tie! ${username} try again!`}
        if(playersChoice === "rock" && computerChoice === "scissors" 
}


