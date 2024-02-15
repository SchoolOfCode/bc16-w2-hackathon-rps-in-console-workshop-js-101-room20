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

