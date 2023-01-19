import * as Elements from "./elements.js";

let bodyID = document.getElementById("bodyID");
let instructions = document.getElementById("instructions");
let BtnsDiv = document.getElementById("BtnsDiv");
let homeBtn = document.getElementById("homeBtn");
let scoreDiv = document.getElementById("scoreDiv");

Elements.ChangeInstructions("How many players?");
Elements.CreatePlayerBtns();

export { bodyID, instructions, BtnsDiv, homeBtn, scoreDiv };
