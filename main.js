import Game from "./modules/game";
import View from "./modules/view";

const root = document.querySelector("#root")
const btns = document.querySelectorAll(".controls span")

btns.forEach(btn => {
  btn.onclick = () => {
    switch (btn.id) {
      case "left": // LEFT
        game.movePieceLeft()
        view.renderPlayfield(game.getState())
        break;

      case "rotate": // UP
        game.rotatePiece()
        view.renderPlayfield(game.getState())
        break;

      case "right": // RIGHT 
        game.movePieceRight()
        view.renderPlayfield(game.getState())
        break;

      case "down": // DOWN
        game.movePieceDown()
        view.renderPlayfield(game.getState())
        break;
    }
  }
})
// const left = document.querySelector(".left")
// const right = document.querySelector(".right")
// const down = document.querySelector(".down")
// const rotate = document.querySelector(".rotate")


const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37: // LEFT
      game.movePieceLeft()
      view.renderPlayfield(game.getState())
      console.log(e.keyCode);
      break;

    case 38: // UP
      game.rotatePiece()
      view.renderPlayfield(game.getState())
      break;

    case 39: // RIGHT 
      game.movePieceRight()
      view.renderPlayfield(game.getState())
      break;

    case 40: // DOWN
      game.movePieceDown()
      view.renderPlayfield(game.getState())
      break;
  }
}

view.renderPlayfield(game.getState())