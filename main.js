import Controller from "./modules/controller";
import Game from "./modules/game";
import View from "./modules/view";

const root = document.querySelector("#root")
// const btns = document.querySelectorAll(".controls span")

// btns.forEach(btn => {
//   btn.onclick = () => {
//     switch (btn.id) {
//       case "left": // LEFT
//         game.movePieceLeft()
//         view.renderMainScreen(game.getState())
//         break;

//       case "rotate": // UP
//         game.rotatePiece()
//         view.renderMainScreen(game.getState())
//         break;

//       case "right": // RIGHT 
//         game.movePieceRight()
//         view.renderMainScreen(game.getState())
//         break;

//       case "down": // DOWN
//         game.movePieceDown()
//         view.renderMainScreen(game.getState())
//         break;
//     }
//   }
// })
// const left = document.querySelector(".left")
// const right = document.querySelector(".right")
// const down = document.querySelector(".down")
// const rotate = document.querySelector(".rotate")


const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;