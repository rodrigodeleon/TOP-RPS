function computerChoice() {
  let res = Math.floor(Math.random() * 3 + 1);
  if (res == 1) {
    return "rock";
  } else if (res == 2) {
    return "paper";
  } else return "scissor";
}

function playerPick() {
  // player picks with prompts
  let playerChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
  while (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissor"
  ) {
    alert(`${playerChoice} it's not an option, please select a valid option`);
    playerChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
  }

  return playerChoice;
}

function playRound(playerPick) {
  let computerPick = computerChoice();
  let result = "papas";
  console.log(`Player picked: ${playerPick}, Computer picked: ${computerPick}`);

  if (playerPick == computerPick) {
    console.log(`It's a tie, both chose ${playerPick} `);
    result = "tie";
  } else {
    switch (computerPick) {
      case "rock":
        switch (playerPick) {
          case "paper":
            console.log("You Win! Paper beats Rock");
            result = true;
            break;
          case "scissor":
            console.log("You Lose! Rock beats Scissors");
            result = false;
            break;
        }
        break;
      case "paper":
        switch (playerPick) {
          case "scissor":
            console.log("You Win! Scissor beats Paper");
            result = true;
            break;
          case "rock":
            console.log("You Lose! Paper beats Rock");
            result = false;
            break;
        }
        break;
      case "scissor":
        switch (playerPick) {
          case "rock":
            console.log("You Win! Rock beats Scissors");
            result = true;
            break;
          case "paper":
            console.log("You Lose! Scissor beats Paper");
            result = false;
            break;
        }
        break;
    }
  }
  let res = document.querySelector("#results");
  let para = document.createElement("p");
  para.textContent = `Player picked: ${playerPick}, Computer picked: ${computerPick} `;
  if (result == "tie") para.textContent += " so it's a TIE";
  else {
    result
      ? (para.textContent += " so you WIN this round")
      : (para.textContent += " so you LOSE this round");
  }

  res.appendChild(para);

  return result;
}

const gameStart = document.querySelector("#gameStart");
gameStart.addEventListener("click", startGame);
let playerScore = 0;
let computerScore = 0;

function startGame() {
  let gameScreen = document.querySelector("#gameScreen");
  let rock = document.createElement("button");
  rock.textContent = "Rock";
  rock.setAttribute("id", "rock");
  rock.classList.add("btn");

  let paper = document.createElement("button");
  paper.textContent = "Paper";
  paper.setAttribute("id", "paper");
  paper.classList.add("btn");

  let scissor = document.createElement("button");
  scissor.textContent = "Scissors";
  scissor.setAttribute("id", "scissor");
  scissor.classList.add("btn");

  let results = document.createElement("div");
  results.textContent = "Results: ";
  results.setAttribute("id", "results");

  gameScreen.appendChild(rock);
  gameScreen.appendChild(paper);
  gameScreen.appendChild(scissor);
  gameScreen.appendChild(results);
  gameStart.style.cssText = "display: none";

  const btns = Array.from(document.querySelectorAll(".btn"));
  btns.forEach((button) => {
    button.addEventListener("click", function () {
      let aux = playRound(button.id);
      if (aux == "tie") console.log("its  tie");
      else {
        aux ? playerScore++ : computerScore++;
      }
      let currentRes = document.createElement("p");
      currentRes.textContent = `Current Score:  Player: ${playerScore} , Computer: ${computerScore}`;
      results.appendChild(currentRes);  
      if (computerScore == 5 || playerScore == 5) gameEnd();
    });
  });
}

function gameEnd() {
  alert(
    `End of the game, Final score: Player: ${playerScore} , Computer: ${computerScore}`
  );
  gameScreen.style.cssText = "display:none";
}

function gameXRounds(x) {
  let resDiv = document.querySelector("#results");
  resDiv.textContent = `Welcome to our Rock, Paper, Scissors game! We are going to play ${x} Rounds, Results will be shown in the console, good luck!`;
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < x; i++) {
    alert(`Round ${i + 1}`);
    console.log(`Round ${i + 1}`);
    let roundResult = playRound(playerPick(), computerPick());
    if (roundResult != "tie") {
      roundResult ? playerScore++ : computerScore++;
    }
    console.log(
      `Player Score: ${playerScore} , Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore)
    res.textContent = console.log(
      `End of the game: You won ${playerScore} to ${computerScore}`
    );
  else if (playerScore < computerScore)
    console.log(`End of the game: You lose ${computerScore} to ${playerScore}`);
  else
    console.log(
      `End of the game, It's a Tie ${playerScore} to ${computerScore}`
    );
}
