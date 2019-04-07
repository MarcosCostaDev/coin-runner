import "phaser";
import { GameScene } from "./scenes/game-scene";

const config: GameConfig = {
    title: "Coin Runner",
    width: 768,
    height: 576,
    type: Phaser.AUTO,
    parent: "game",
    scene: [GameScene],
    input: {
        keyboard: true
    },
    backgroundColor: "#3A99D9",
    render: { pixelArt: false, antialias: false }
};


export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    var game = new Game(config);
});