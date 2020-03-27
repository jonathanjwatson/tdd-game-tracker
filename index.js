console.log("Testing");

const GameTracker = require("./gameTracker");

const game = new GameTracker("asteroid", 0);

console.log(game);

game.addToScore(game.getRandomScore());