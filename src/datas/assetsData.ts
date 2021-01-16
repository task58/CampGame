// データの文法 {key : "" , url : "" },

export let AssetDatas : AssetData[] = [
    {key : "title"              ,   url : "Assets/Title.png"                },
    {key : "normal_Grid:blue"   ,   url : "Assets/normal-Grid-blue.png"     },
    {key : "normal_Grid:red"    ,   url : "Assets/normal-Grid-red.png"      },
    {key : "normal_Grid:null"   ,   url : "Assets/normal-Grid-null.png"     },
    {key : "player_blue"        ,   url : "Assets/player-blue-attack.png"   },
    {key : "player_blue:attack" ,   url : "Assets/player-blue-attack.png"   },
    {key : "player_red"         ,   url : "Assets/player-red.png"           },
    {key : "player_red:attack"  ,   url : "Assets/player-red-attack.png"    },
    {key : "spawn_Grid:blue"    ,   url : "Assets/spawn-Grid-blue.png"      },
    {key : "spawn_Grid:red"     ,   url : "Assets/spawn-Grid-red.png"       },
    {key : "void_Grid"          ,   url : "Assets/void-Grid.png"            },
]

class AssetData {
    key : string;
    url : string;
}