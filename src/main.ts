import "phaser";
import {SceneManager} from "./scenes/SceneManager"

const config: Phaser.Types.Core.GameConfig = {
    title: "CampGame",    
    version: "0.0.1",       
    width: 800,            
    height: 500,            
    parent:"game",          
    type: Phaser.AUTO,      
    scene: SceneManager,
    fps : {
        min : 10,
        target : 30
    },
    input : {
        keyboard : true
    }    
};

export class Game extends Phaser.Game{
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    var game = new Game(config);
});