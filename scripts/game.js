function resetGame() {
  gameIsOver = false;
  activePlayer = 0;
  currentRound = 0;
  playerTurn.textContent = players[activePlayer].name;
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardFields[index].textContent = "";
      gameBoardFields[index].classList.remove("disabled");
      index++;
    }
  }
  gameOver.firstElementChild.innerHTML = "you won! <span>player name</span>";
  gameOver.style.display = "none";
}

function selectedField(event) {
  let selectedField = event.target;
  if (selectedField.textContent !== "" || gameIsOver === true) {
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  gameData[selectedField.dataset.row - 1][selectedField.dataset.col - 1] =
    activePlayer + 1;
  currentRound++;
  selectedField.classList.add("disabled");
  activePlayer = +!activePlayer;
  playerTurn.textContent = players[activePlayer].name;
  let winnerId = checkGameOver();
  console.log(winnerId);
  if (winnerId !== 0) {
    gameIsOver = true;
    endGame(winnerId);
  }
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][1] > 0 &&
      gameData[i][1] === gameData[i][2] &&
      gameData[i][1] === gameData[i][0]
    ) {
      return gameData[i][1];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[1][i] > 0 &&
      gameData[1][i] === gameData[2][i] &&
      gameData[1][i] === gameData[0][i]
    ) {
      return gameData[1][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOver.style.display = "block";
  if (winnerId > 0) {
    gameOver.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOver.firstElementChild.textContent = "it is a draw";
  }
}
