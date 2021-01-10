export class Player extends Phaser.GameObjects.Sprite{

    private canMove:boolean;
    private MovingDistance:number;
    private coolTimer:Phaser.Time.TimerEvent;

    private normalTexture:string | Phaser.Textures.Texture;
    private attackTexture:string | Phaser.Textures.Texture;

    constructor(scene:Phaser.Scene,x:number,y:number,normalTexture:string | Phaser.Textures.Texture,attackTexture:string | Phaser.Textures.Texture,MovingDistance:number){
        super(scene,x,y,normalTexture);
        this.MovingDistance = MovingDistance;
        this.normalTexture = normalTexture;
        this.attackTexture = attackTexture;
    }

    update():void{
        if(this.canMove){
            this.coolTimer.remove(false);
            this.coolTimer = null;
        }else{
            this.coolTimer = this.scene.time.addEvent({
                delay : 1,
                loop : false,
                callback : ()=>{this.canMove = true},
                callbackScope : this
            });
        }
    }

    public Translate(x:number,y:number):void{
        if(!this.canMove)return;
        this.x += x * this.MovingDistance;
        this.y += y * this.MovingDistance;
        this.canMove = false;
        
    }
}