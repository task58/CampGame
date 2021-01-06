export class InputManager extends Phaser.Scene{

    public keyCode = new InputCode();

    private keys = {
        "A":this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        "D":this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        "S":this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        "W":this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
    }

    constructor(){
        super({
            key : "InputManager"
        })
    }

    public getKeyDown(key : string){
        var input = this.keys[key];
        if(input instanceof Phaser.Input.Keyboard.Key){
            return input.isDown;
        }else{
            return false;
        }
    }

    public getKeyUp(key : string){
        var input = this.keys[key];
        if(input instanceof Phaser.Input.Keyboard.Key){
            return input.isUp;
        }else{
            return false;
        }
    }

    
}

export class InputCode{
    public A : string = "A";
    public D : string = "D";
    public S : string = "S";
    public W : string = "W";
}