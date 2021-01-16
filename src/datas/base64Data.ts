import title from "../../Assets/Title.png";

import normal_Grid_blue from "../../Assets/normal-Grid-blue.png";
import normal_Grid_red from "../../Assets/normal-Grid-red.png";
import normal_Grid_null from "../../Assets/normal-Grid-null.png";

import player_blue from "../../Assets/player-blue.png";
import player_blue_attack from "../../Assets/player-blue-attack.png";
import player_red from "../../Assets/player-red.png"
import player_red_attack from "../../Assets/player-red-attack.png";

import spawn_Grid_blue from "../../Assets/spawn-Grid-blue.png";
import spawn_Grid_red from "../../Assets/spawn-Grid-red.png"

import void_Grid from "../../Assets/void-Grid.png"

let temp = (key:string,value:any):base64Data => {
    return {key:key,value:value}
}

export let base64:Array<base64Data> = [
    temp("title",title),//タイトル

    temp("normal_Grid:blue",normal_Grid_blue),//青色の陣地
    temp("normal_Grid:null",normal_Grid_null),//色がない陣地
    temp("normal_Grid:red",normal_Grid_red),//赤色の陣地

    temp("player_blue",player_blue),//青色のプレイヤー
    temp("player_blue:attack",player_blue_attack),//青色のプレイヤー(攻撃モード)
    temp("player_red",player_red),//赤色のプレイヤー
    temp("player_red:attack",player_red_attack),//赤色のプレイヤー(攻撃モード)

    temp("spawn_Grid:blue",spawn_Grid_blue),//青色のスポーン地点
    temp("spawn_Grid:red",spawn_Grid_red),//赤色のスポーン地点

    temp("void_Grid",void_Grid)//奈落
];



class base64Data{
    key:string;
    value;
}