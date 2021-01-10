import {TitleScene} from "./title-scene";
import {LoadScene} from "./load-scene"
import {MenuScene} from "./menu-scene"
import {Simple2pScene} from "./Simple2p-scene"

import {InputManager} from "../components/InputManager"

export let SceneManager = [
    LoadScene,
    TitleScene,
    MenuScene,
    Simple2pScene,
    InputManager
]