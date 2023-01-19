import { bodyID, instructions, BtnsDiv, homeBtn, scoreDiv } from "./app.js";
import {
  player2Choice,
  urlCall,
  ChangePlayer2Choice,
  CheckRoundWinner,
  CheckWinner,
  ResetPlayer2Choice,
  ResetPlayerScore,
  scoreOneImageSrc,
  scoreOneImageAlt,
  scoreTwoImageSrc,
  scoreTwoImageAlt,
  UpdatePlayerScoreLogo,
} from "./opponent.js";

let players = "";
let gamemode = "";
let player1Choice = "";
let h2;
let inGame = false;

function ChangeInstructions(instructionStr) {
  instructions.innerHTML = "";

  h2 = document.createElement("h2");
  h2.textContent = instructionStr;

  instructions.appendChild(h2);
}

function ChangeScore() {
  scoreDiv.innerHTML = "";

  let scoreBox = document.createElement("div");
  scoreBox.className = "score-box";
  scoreBox.id = "scoreBox";

  let scoreOneDiv = document.createElement("div");
  scoreOneDiv.className = "player-score";
  let scoreOneTxt = document.createElement("h3");
  scoreOneTxt.textContent = "Player One";
  let scoreOne = document.createElement("img");
  scoreOne.className = "score-image";
  scoreOne.src = scoreOneImageSrc;
  scoreOne.alt = scoreOneImageAlt;

  let scoreTwoDiv = document.createElement("div");
  scoreTwoDiv.className = "player-score";
  let scoreTwoTxt = document.createElement("h3");
  scoreTwoTxt.textContent = "Player Two";
  let scoreTwo = document.createElement("img");
  scoreTwo.className = "score-image";
  scoreTwo.src = scoreTwoImageSrc;
  scoreTwo.alt = scoreTwoImageAlt;

  scoreOneDiv.appendChild(scoreOneTxt);
  scoreOneDiv.appendChild(scoreOne);
  scoreTwoDiv.appendChild(scoreTwoTxt);
  scoreTwoDiv.appendChild(scoreTwo);
  scoreBox.appendChild(scoreOneDiv);
  scoreBox.appendChild(scoreTwoDiv);
  scoreDiv.appendChild(scoreBox);
}

function DeleteScoreBox() {
  scoreDiv.removeChild(scoreBox);
}

function CreateHomeBtn() {
  homeBtn.innerHTML = "";

  let btnImage = document.createElement("img");
  btnImage.className = "selection-image";
  btnImage.src = "./assets/quit.png";
  btnImage.alt = "Home";
  btnImage.addEventListener("click", function () {
    if (
      h2.textContent != "Player One Wins" &&
      h2.textContent != "Player Two Wins"
    ) {
      let btnsRow = document.getElementById("btnsRow");
      BtnsDiv.removeChild(btnsRow);
    }
    ChangeInstructions("How many players?");
    ResetPlayer1Choice();
    ResetPlayer2Choice();
    ResetPlayerScore();
    CreatePlayerBtns();
    if (inGame) {
      DeleteScoreBox();
      inGame = false;
    }
    homeBtn.removeChild(btnImage);
  });
  homeBtn.appendChild(btnImage);
}

function CreatePlayerBtns() {
  let btnsRow = document.createElement("div");
  btnsRow.id = "btnsRow";
  btnsRow.className = "mode-selection";
  btnsRow.innerHTML = "";

  let selectionBtnImage1 = document.createElement("img");
  selectionBtnImage1.className = "selection-image";
  selectionBtnImage1.src = "./assets/one.png";
  selectionBtnImage1.alt = "Singleplayer";
  selectionBtnImage1.addEventListener("click", function () {
    players = "singleplayer";
    BtnsDiv.removeChild(btnsRow);
    ChangeInstructions("How many rounds?");
    CreateGamemodeBtns();
    CreateHomeBtn();
  });
  let selectionBtnImage2 = document.createElement("img");
  selectionBtnImage2.className = "selection-image";
  selectionBtnImage2.src = "./assets/two.png";
  selectionBtnImage2.alt = "Singleplayer";
  selectionBtnImage2.addEventListener("click", function () {
    players = "multiplayer";
    BtnsDiv.removeChild(btnsRow);
    ChangeInstructions("How many rounds?");
    CreateGamemodeBtns();
    CreateHomeBtn();
  });

  btnsRow.appendChild(selectionBtnImage1);
  btnsRow.appendChild(selectionBtnImage2);
  BtnsDiv.appendChild(btnsRow);
}

function CreateGamemodeBtns() {
  let btnsRow = document.createElement("div");
  btnsRow.id = "btnsRow";
  btnsRow.className = "mode-selection";
  btnsRow.innerHTML = "";

  let selectionBtnImage1 = document.createElement("img");
  selectionBtnImage1.className = "selection-image";
  selectionBtnImage1.src = "./assets/one.png";
  selectionBtnImage1.alt = "One Round";
  selectionBtnImage1.addEventListener("click", function () {
    gamemode = "1";
    BtnsDiv.removeChild(btnsRow);
    ChangeInstructions("Player 1 Choose");
    inGame = true;
    UpdatePlayerScoreLogo();
    ChangeScore();
    CreateSelectionBtns();
  });
  let selectionBtnImage2 = document.createElement("img");
  selectionBtnImage2.className = "selection-image";
  selectionBtnImage2.src = "./assets/five.png";
  selectionBtnImage2.alt = "Best of Five";
  selectionBtnImage2.addEventListener("click", function () {
    gamemode = "3";
    BtnsDiv.removeChild(btnsRow);
    ChangeInstructions("Player 1 Choose");
    inGame = true;
    UpdatePlayerScoreLogo();
    ChangeScore();
    CreateSelectionBtns();
  });
  let selectionBtnImage3 = document.createElement("img");
  selectionBtnImage3.className = "selection-image";
  selectionBtnImage3.src = "./assets/seven.png";
  selectionBtnImage3.alt = "Best of Seven";
  selectionBtnImage3.addEventListener("click", function () {
    gamemode = "4";
    BtnsDiv.removeChild(btnsRow);
    ChangeInstructions("Player 1 Choose");
    inGame = true;
    UpdatePlayerScoreLogo();
    ChangeScore();
    CreateSelectionBtns();
  });

  btnsRow.appendChild(selectionBtnImage1);
  btnsRow.appendChild(selectionBtnImage2);
  btnsRow.appendChild(selectionBtnImage3);
  BtnsDiv.appendChild(btnsRow);
}

function CreateSelectionBtns() {
  let btnsRow = document.createElement("div");
  btnsRow.id = "btnsRow";
  btnsRow.className = "mode-selection";
  btnsRow.innerHTML = "";

  let selectionBtnImage1 = document.createElement("img");
  selectionBtnImage1.className = "selection-image";
  selectionBtnImage1.src = "./assets/rock.png";
  selectionBtnImage1.alt = "Rock";
  selectionBtnImage1.addEventListener("click", function () {
    if (player1Choice == "") {
      player1Choice = "Rock";
      if (players == "singleplayer") {
        urlCall();
      } else {
        instructions.removeChild(h2);
        ChangeInstructions("Player 2 Choose");
      }
    } else {
      ChangePlayer2Choice("Rock");
      CheckRoundWinner();
    }
  });
  let selectionBtnImage2 = document.createElement("img");
  selectionBtnImage2.className = "selection-image";
  selectionBtnImage2.src = "./assets/paper.png";
  selectionBtnImage2.alt = "Paper";
  selectionBtnImage2.addEventListener("click", function () {
    if (player1Choice == "") {
      player1Choice = "Paper";
      if (players == "singleplayer") {
        urlCall();
      } else {
        instructions.removeChild(h2);
        ChangeInstructions("Player 2 Choose");
      }
    } else {
      ChangePlayer2Choice("Paper");
      CheckRoundWinner();
    }
  });
  let selectionBtnImage3 = document.createElement("img");
  selectionBtnImage3.className = "selection-image";
  selectionBtnImage3.src = "./assets/scissors.png";
  selectionBtnImage3.alt = "Scissors";
  selectionBtnImage3.addEventListener("click", function () {
    if (player1Choice == "") {
      player1Choice = "Scissors";
      if (players == "singleplayer") {
        urlCall();
      } else {
        instructions.removeChild(h2);
        ChangeInstructions("Player 2 Choose");
      }
    } else {
      ChangePlayer2Choice("Scissors");
      CheckRoundWinner();
    }
  });
  let selectionBtnImage4 = document.createElement("img");
  selectionBtnImage4.className = "selection-image";
  selectionBtnImage4.src = "./assets/lizard.png";
  selectionBtnImage4.alt = "Lizard";
  selectionBtnImage4.addEventListener("click", function () {
    if (player1Choice == "") {
      player1Choice = "Lizard";
      if (players == "singleplayer") {
        urlCall();
      } else {
        instructions.removeChild(h2);
        ChangeInstructions("Player 2 Choose");
      }
    } else {
      ChangePlayer2Choice("Lizard");
      CheckRoundWinner();
    }
  });
  let selectionBtnImage5 = document.createElement("img");
  selectionBtnImage5.className = "selection-image";
  selectionBtnImage5.src = "./assets/spock.png";
  selectionBtnImage5.alt = "Spock";
  selectionBtnImage5.addEventListener("click", function () {
    if (player1Choice == "") {
      player1Choice = "Spock";
      if (players == "singleplayer") {
        urlCall();
      } else {
        instructions.removeChild(h2);
        ChangeInstructions("Player 2 Choose");
      }
    } else {
      ChangePlayer2Choice("Spock");
      CheckRoundWinner();
    }
  });

  btnsRow.appendChild(selectionBtnImage1);
  btnsRow.appendChild(selectionBtnImage2);
  btnsRow.appendChild(selectionBtnImage3);
  btnsRow.appendChild(selectionBtnImage4);
  btnsRow.appendChild(selectionBtnImage5);
  BtnsDiv.appendChild(btnsRow);
}

function ResetPlayer1Choice() {
  player1Choice = "";
}

export {
  player1Choice,
  gamemode,
  h2,
  ChangeInstructions,
  CreatePlayerBtns,
  CreateGamemodeBtns,
  CreateSelectionBtns,
  ResetPlayer1Choice,
  ChangeScore,
  DeleteScoreBox,
};
