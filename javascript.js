function getComputerChoice() {
  let res = Math.floor(Math.random() * 3 + 1);
  if (res == 1) {
    return "rock";
  } else if (res == 2) {
    return "paper";
  } else return "scissor";
}

function play(playerPick, computerPick) {
  computerPick = getComputerChoice();
  playerPick = prompt("Rock, Paper or Scissor?").toLowerCase();
  while (
    playerPick != "rock" &&
    playerPick != "paper" &&
    playerPick != "scissor"
  ) {
    alert(`${playerPick} no es una opcion`);
    playerPick = prompt("Rock, Paper or Scissor?").toLowerCase();
  }

  console.log(`Player picked: ${playerPick}, Computer picked: ${computerPick}`);

  if (playerPick == computerPick) {
    return "it's a tie";
  } else {
    switch (computerPick) {
      case "rock":
        switch (playerPick) {
          case "scissor":
            return "You Lose! Paper beats Rock";
          case "paper":
            return "You Win! Paper wraps Rock";
        }

      case "paper":
        switch (playerPick) {
          case "scissor":
            return "You Win! Scissor beats Paper";
          case "rock":
            return "You Lose! Paper beats Rock";
        }

      case "scissor":
        switch (playerPick) {
          case "paper":
            return "You Lose! Scissor beats Paper";
          case "rock":
            return "You Win! Rock beats Scissor";
        }
    }
  }
}

console.log(play());
