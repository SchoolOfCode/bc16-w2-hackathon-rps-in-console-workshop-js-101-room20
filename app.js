let username = "";

function getName() {
  username = prompt(
    `Welcome to Rock, Paper, Scissors! Please enter your name to start playing`
  );
  return username;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playersChoice, computerChoice, username) {
  if (playersChoice === computerChoice) {
    return `You tied with the computer, unlucky!`;
  }

  if (
    (playersChoice === "rock" && computerChoice === "scissors") ||
    (playersChoice === "scissors" && computerChoice === "paper") ||
    (playersChoice === "paper" && computerChoice === "rock")
  ) {
    return `Congratulations ${username}, you beat the computer!`;
  } else {
    return `Bad luck ${username}, the computer beat you!`;
  }
}

function playRPSWithPrompt(getName) {
  const username = getName();
  let playAgain = true;

  while (playAgain) {
    const playersChoice = prompt(
      "Enter your choice (Rock, Paper or Scissors):"
    ).toLowerCase();

    if (!["rock", "paper", "scissors"].includes(playersChoice)) {
      return alert(
        `Sorry ${username} that was an invalid choice, please enter Rock, Paper or Scissors`
      );
    }

    const computerChoice = getComputerChoice();
    const resultMessage =
      `Players choice: ${playersChoice}\nComputers choice: ${computerChoice}\n` +
      determineWinner(playersChoice, computerChoice, username);

    alert(resultMessage);
    playAgain = confirm("Do you want to play again?");
  }
}

playRPSWithPrompt(getName);
