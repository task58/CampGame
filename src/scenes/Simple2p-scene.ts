import { InputManager } from "../components/InputManager";

export class Simple2pScene extends Phaser.Scene{
    private InputManager : InputManager;

    constructor(){
        super({
            key : "simple2p"
        });
    }

    create():void{
        var get = this.scene.get("InputManager");
        if(get instanceof InputManager){
            this.InputManager = get;
        }else{
            throw new Error("Scene search failed : \"InputManager\" not found");
        }

        
    }
}