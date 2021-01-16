//パス名の生成
var path = require("path");
var pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
var phaser = path.join(pathToPhaser, "dist/phaser.js");

//webpackの出力設定
module.exports = {
    //実行開始地点となるファイル
    entry: './src/main.ts',

    mode : "development",
   
    output: {
        
        path: path.resolve(__dirname, "dist"),
        
        filename: "bundle.js"
    },
    
    module: {
        rules: [
            
            { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" },
            
            {
                test: /phaser\.js$/,
                loader: "expose-loader",
                options: {
                    exposes:['phaser']
                }
            },

            {
                test: /\.(jpg|png|jpeg)$/,
                loader: 'url-loader'
            }
        ]
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        host: "127.0.0.1",
        port: 9000,
        open: true
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaser
        }
    },
    optimization: {
        minimize: true
    }
};