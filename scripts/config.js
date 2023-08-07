function openOverlayConfig(event) {
  editedPlayer = event.target.dataset.player;
  backdropElement.style.display = "block";
  overLayElement.style.display = "block";
}

function closeOverlayConfig() {
  backdropElement.style.display = "none";
  overLayElement.style.display = "none";
  formElement.children[1].lastElementChild.value = "";
  formElement.classList.remove("error");
}

function savePlayer(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  const enterPlayername = formData.get("playername").trim();
  if (!enterPlayername) {
    formElement.classList.add("error");
    console.log(formElement.children[2]);
    formElement.children[2].textContent = "please enter a valid name";
    return;
  }

  players[editedPlayer - 1].name = enterPlayername;

  const updatedDataElement = document.querySelector(
    "#player-" + editedPlayer + "-data"
  );
  updatedDataElement.children[1].textContent = enterPlayername;

  closeOverlayConfig();
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("please enter the player's name");
    return;
  }
  activeGame.style.display = "block";
  resetGame();
}
