const defaultStyle:Phaser.Types.GameObjects.Text.TextStyle={
    fontSize : "30px",
    stroke : "#000000 1",
    backgroundColor : "#FFFFFF",
    color : "#000000"
};

export class Button extends Phaser.GameObjects.Text{

    constructor(callBack:Function,scene:Phaser.Scene,x:number,y:number,text:string|string[],style:Phaser.Types.GameObjects.Text.TextStyle = defaultStyle){
        super(scene,x,y,text,style);
        this.setInteractive();
        this.on("pointerdown",callBack,scene);
    }
}