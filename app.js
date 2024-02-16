let score = 0;

function adjustScore(result) {
  if (result === "win") {
    score += 1;
  } else if (result === "lose") {
    score = Math.max(0, score - 1);
  } else if (result === "tie") {
    return;
  }
}

function getName() {
  let username = "";
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
    return ["tie", `You tied with the computer, unlucky!`];
  }

  if (
    (playersChoice === "rock" && computerChoice === "scissors") ||
    (playersChoice === "scissors" && computerChoice === "paper") ||
    (playersChoice === "paper" && computerChoice === "rock")
  ) {
    return ["win", `Congratulations ${username}, you beat the computer!`];
  } else {
    return ["lose", `Bad luck ${username}, the computer beat you!`];
  }
}

function playRPSWithPrompt(getName) {
  const username = getName();
  if (username === null || username.trim() === "") {
    return alert(
      `The game has been stopped, please enter a username and click ok.\nRefresh the page to try again.`
      );
  }
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
    const [result, message] = determineWinner(playersChoice, computerChoice, username)

    adjustScore(result);


    const resultMessage =
      `Players choice: ${playersChoice}\nComputers choice: ${computerChoice}\n` + `${message}\n` + `Your score is: ${score}`;
    alert(resultMessage);
    playAgain = confirm("Do you want to play again?");
  }
}

playRPSWithPrompt(getName);
