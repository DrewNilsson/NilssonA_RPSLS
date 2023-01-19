import {
  player1Choice,
  ResetPlayer1Choice,
  gamemode,
  ChangeInstructions,
  h2,
  ChangeScore,
  DeleteScoreBox,
} from "./elements.js";
import { BtnsDiv, instructions, homeBtn } from "./app.js";

let player2Choice;
let player1Score = 0;
let player2Score = 0;
let scoreOneImageSrc;
let scoreOneImageAlt;
let scoreTwoImageSrc;
let scoreTwoImageAlt;

function urlCall() {
  fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  )
    .then((response) => response.text())
    .then((data) => {
      player2Choice = data;
      CheckRoundWinner();
    });
}

function ChangePlayer2Choice(choiceInput) {
  player2Choice = choiceInput;
}

function CheckRoundWinner() {
  console.log(player2Choice);
  if (
    (player1Choice == "Rock" && player2Choice == "Scissors") ||
    (player1Choice == "Rock" && player2Choice == "Lizard") ||
    (player1Choice == "Paper" && player2Choice == "Rock") ||
    (player1Choice == "Paper" && player2Choice == "Spock") ||
    (player1Choice == "Scissors" && player2Choice == "Paper") ||
    (player1Choice == "Scissors" && player2Choice == "Lizard") ||
    (player1Choice == "Lizard" && player2Choice == "Paper") ||
    (player1Choice == "Lizard" && player2Choice == "Spock") ||
    (player1Choice == "Spock" && player2Choice == "Scissors") ||
    (player1Choice == "Spock" && player2Choice == "Rock")
  ) {
    player1Score++;
  } else if (player1Choice == player2Choice) {
  } else {
    player2Score++;
  }

  console.log(player1Score + "\n" + player2Score);

  UpdatePlayerScoreLogo();
  ChangeScore();
  ResetPlayer1Choice();
  ResetPlayer2Choice();

  CheckWinner();
}

function CheckWinner() {
  if (player1Score == gamemode) {
    instructions.removeChild(h2);
    BtnsDiv.removeChild(btnsRow);

    ResetPlayerScore();

    ChangeInstructions("Player One Wins");
  } else if (player2Score == gamemode) {
    instructions.removeChild(h2);
    BtnsDiv.removeChild(btnsRow);

    ResetPlayerScore();

    ChangeInstructions("Player Two Wins");
  } else {
    instructions.removeChild(h2);
    ChangeInstructions("Player 1 Choose");
  }
}

function ResetPlayerScore() {
  player1Score = 0;
  player2Score = 0;
}

function UpdatePlayerScoreLogo() {
  switch (player1Score) {
    case 0:
      scoreOneImageSrc = "./assets/zero.png";
      scoreOneImageAlt = "Zero";
      break;
    case 1:
      scoreOneImageSrc = "./assets/one.png";
      scoreOneImageAlt = "One";
      break;
    case 2:
      scoreOneImageSrc = "./assets/two.png";
      scoreOneImageAlt = "Two";
      break;
    case 3:
      scoreOneImageSrc = "./assets/three.png";
      scoreOneImageAlt = "Three";
      break;
    case 4:
      scoreOneImageSrc = "./assets/four.png";
      scoreOneImageAlt = "Four";
      break;
  }

  switch (player2Score) {
    case 0:
      scoreTwoImageSrc = "./assets/zero.png";
      scoreTwoImageAlt = "Zero";
      break;
    case 1:
      scoreTwoImageSrc = "./assets/one.png";
      scoreTwoImageAlt = "One";
      break;
    case 2:
      scoreTwoImageSrc = "./assets/two.png";
      scoreTwoImageAlt = "Two";
      break;
    case 3:
      scoreTwoImageSrc = "./assets/three.png";
      scoreTwoImageAlt = "Three";
      break;
    case 4:
      scoreTwoImageSrc = "./assets/four.png";
      scoreTwoImageAlt = "Four";
      break;
  }
}

function ResetPlayer2Choice() {
  player2Choice = "";
}

export {
  player2Choice,
  scoreOneImageSrc,
  scoreOneImageAlt,
  scoreTwoImageSrc,
  scoreTwoImageAlt,
  urlCall,
  ChangePlayer2Choice,
  CheckRoundWinner,
  CheckWinner,
  ResetPlayer2Choice,
  UpdatePlayerScoreLogo,
  ResetPlayerScore,
};
