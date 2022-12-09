import Game from "./game.js";
import GameView from "./gameview.js";

let game = new Game();
let gameview = new GameView(document.getElementById("app"));

//define funcs for on 
gameview.onTileClick = (i) => {
    game.makeMove(i);
    gameview.update(game);
};
gameview.onRestartClick = () => {
    game = new Game();
    gameview.update(game);
}
gameview.update(game); 