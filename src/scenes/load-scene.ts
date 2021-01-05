import {AssetDatas} from "../datas/assetsData";

export class LoadScene extends Phaser.Scene {
    private BackgroundColor = "FFFFFF";

    constructor(){
        super({
            key : "load"
        })
    }

    preload():void{
        let cache = this;
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        let text = this.add.text(this.sys.canvas.width / 2, 350,"load");
        text.setOrigin(0.5);

        //ロードが進行したときの処理
        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        //ファイルのロードに入ったときの処理
        this.load.on('fileprogress', function (file) {
            text.text = file.key;
        });

        //すべてのロードが完了したときの処理
        this.load.on('complete', function () {
            text.text = 'complete';
            setTimeout(() => {
                cache.scene.start("title");
            }, 2000);
        });
    }

    create():void{
        //this.cameras.main.setBackgroundColor(this.BackgroundColor);
        var cache = this;
        AssetDatas.forEach((value)=>{
            cache.load.image(value.key,value.url);
        });
        this.load.start();
    }
}