import {Button} from "../components/Button"

export class MenuScene extends Phaser.Scene {


    constructor(){
        super({
            key : "menu"
        });
    }

    create(){
        this.add.existing(new Button(()=>console.log("aaaa"),this,30,30,"Button"));
    }
}