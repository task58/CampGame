import { InputManager } from "../components/InputManager";
import { Player } from "../components/Player";

export class Simple2pScene extends Phaser.Scene{
    private InputManager : InputManager;

    private player1 : Player;

    constructor(){
        super({
            key : "simple2p"
        });
    }

    create():void{
        this.scene.launch("InputManager");
        var get = this.scene.get("InputManager");
        console.log(get);
        if(get instanceof InputManager){
             this.InputManager = get;
        }else{
            throw new Error("Scene search failed : \"InputManager\" not found");
        }

        this.player1 = new Player(this,0,0,"player_blue","player_blue:attack",10);
        this.add.existing(this.player1);
    }

    update():void{
        if(this.InputManager.getKeyDown(Phaser.Input.Keyboard.KeyCodes.S)){
            this.player1.Translate(10,0)
            console.log("Debug : S key Pressed")
            
        }
    }
}