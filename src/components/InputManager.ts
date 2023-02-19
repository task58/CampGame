export class InputManager extends Phaser.Scene{

    private keys = {}

    constructor(){
        super({
            key : "InputManager"
        })
    }


    create(){
        console.log(Phaser.Input.Keyboard.KeyCodes)
        for(let index in Phaser.Input.Keyboard.KeyCodes){
            this.keys[Phaser.Input.Keyboard.KeyCodes[index]] = this.input.keyboard.addKey(index);
        }
    }

    public getKeyDown(key : string | number){
        var inputKey = this.keys[key];
        if(inputKey instanceof Phaser.Input.Keyboard.Key){
            return inputKey.isDown;
        }else{
            return false;
        }
    }

    public getKeyUp(key : string | number){
        var inputKey = this.keys[key];
        if(inputKey instanceof Phaser.Input.Keyboard.Key){
            return inputKey.isUp;
        }else{
            return false;
        }
    }
}