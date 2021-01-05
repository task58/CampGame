export class TitleScene extends Phaser.Scene {
    private BackgroundColor = "FFFFFF";

    constructor() {
        super({
            key: "title"
        });
    }

    preload(): void {
        
    }

    create():void{
        this.cameras.main.setBackgroundColor(this.BackgroundColor);
        var title = this.add.image(400,125,"title");
        title.setOrigin(0.5);
        var text = this.add.text(400,300,"Start on press space key!");
        text.setOrigin(0.5).setColor("000000").setFontSize(50);
    }

    update():void{
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        if(space.isDown){
            // this.scene.start("menu");
        }
    }
}