import * as Menu from './scenes/menu.ts'
import { loadScene, startGameLoop } from './game.ts';

// bootstrap the game
loadScene(Menu)

startGameLoop();