let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;
let players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdropElement = document.querySelector("#backdrop");
const overLayElement = document.querySelector("#overlay");
const editPlayer1BtnElement = document.querySelector("#edit-player-1-btn");
const editPlayer2BtnElement = document.querySelector("#edit-player-2-btn");
const cancelBtnElement = document.querySelector("#close-btn");
const playerName = document.querySelector("#playername");
const formElement = document.querySelector("form");
const startNewGameBtnElement = document.querySelector("#start-new-game");
let gameBoardFields = document.querySelectorAll("#game-board li");
let activeGame = document.querySelector("#active-game");
let playerTurn = document.querySelector("#player-turn");
let gameOver = document.querySelector("#game-over");

editPlayer1BtnElement.addEventListener("click", openOverlayConfig);
editPlayer2BtnElement.addEventListener("click", openOverlayConfig);
backdropElement.addEventListener("click", closeOverlayConfig);
cancelBtnElement.addEventListener("click", closeOverlayConfig);
formElement.addEventListener("submit", savePlayer);
startNewGameBtnElement.addEventListener("click", startNewGame);
for (let gameBoardField of gameBoardFields) {
  gameBoardField.addEventListener("click", selectedField);
}
