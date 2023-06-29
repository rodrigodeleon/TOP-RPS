function getComputerChoice() {
  let res = Math.floor(Math.random() * 3 + 1);
  if (res == 1) {
    return "rock";
  } else if (res == 2) {
    return "paper";
  } else return "scissor";
}

function playRound() {
  let computerPick = getComputerChoice();
  let playerPick = prompt("Rock, Paper or Scissor?").toLowerCase();
  while (
    playerPick != "rock" &&
    playerPick != "paper" &&
    playerPick != "scissor"
  ) {
    alert(`${playerPick} it's not an option, please select a valid option`);
    playerPick = prompt("Rock, Paper or Scissor?").toLowerCase();
  }

  console.log(`Player picked: ${playerPick}, Computer picked: ${computerPick}`);

  if (playerPick == computerPick) {
    console.log(`It's a tie, both chose ${playerPick} `);
    alert(`It's a tie, both chose ${playerPick} `);
    return "tie";
  } else {
    switch (computerPick) {
      case "rock":
        switch (playerPick) {
          case "paper":
            console.log("You Win! Paper beats Rock");
            alert("You Win! Paper beats Rock");
            return true;
          case "scissor":
            console.log("You Lose! Rock beats Scissors");
            alert("You Lose! Rock beats Scissors");
            return false;
        }
      case "paper":
        switch (playerPick) {
          case "scissor":
            console.log("You Win! Scissor beats Paper");
            alert("You Win! Scissor beats Paper");
            return true;
          case "rock":
            console.log("You Lose! Paper beats Rock");
            alert("You Lose! Paper beats Rock");
            return false;
        }
      case "scissor":
        switch (playerPick) {
          case "rock":
            console.log("You Win! Rock beats Scissors");
            alert("You Win! Rock beats Scissors");
            return true;
          case "paper":
            console.log("You Lose! Scissor beats Paper");
            alert("You Lose! Scissor beats Paper");
            return false;
        }
    }
  }
}

function game() {
  alert(
    `Welcome to our Rock, Paper, Scissors game! Results will be shown in the console, good luck!`
  );
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    alert(`Round ${i + 1}`);
    console.log(`Round ${i + 1}`);
    let roundResult = playRound();
    if (roundResult != "tie") {
      roundResult ? playerScore++ : computerScore++;
    }
    console.log(
      `Player Score: ${playerScore} , Computer Score: ${computerScore}`
    );
     }

  if (playerScore > computerScore)
    console.log(`End of the game: You won ${playerScore} to ${computerScore}`);
  else if (playerScore < computerScore)
    console.log(`End of the game: You lose ${computerScore} to ${playerScore}`);
  else
    console.log(
      `End of the game, It's a Tie ${playerScore} to ${computerScore}`
    );
}
game();
