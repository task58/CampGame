import {Button} from "../components/Button"

export class MenuScene extends Phaser.Scene {


    constructor(){
        super({
            key : "menu"
        });
    }

    create(){
        this.add.existing(new Button(()=>{this.scene.start("simple2p")},this,this,0,0,"Simple2p"));
    }
}