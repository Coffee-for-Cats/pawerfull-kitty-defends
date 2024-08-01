import { CANVAS_SOURCE } from './config.ts';
import * as Menu from './scenes/menu.ts'

export interface Entity {
  step: Function
}

export interface Scene {
  load?: Function,
  drop?: Function,
  alive?: Function,
  entities: Entity[]
}

// Canvas where to draw the game
export const Canvas = document.getElementById(CANVAS_SOURCE) as HTMLCanvasElement;
if(!Canvas) { throw new Error('Canvas not found') }
// Ctx how to draw the game
export const Ctx = Canvas.getContext('2d') as CanvasRenderingContext2D;
if(!Ctx) { throw new Error(`#${CANVAS_SOURCE} is not a canvas!`) }
Ctx.imageSmoothingEnabled = false;


let actualScene: Scene;

export async function loadScene(module: Scene) {
  if(actualScene?.drop) actualScene.drop(module);
  if(module.load) module.load(actualScene);
  actualScene = module;
}

// the entire gameloop =)
function step() {
  if (actualScene.alive) actualScene.alive()
  for(let i = 0; i < actualScene.entities.length; i++) {
    Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    actualScene.entities[i].step(actualScene)
  }
  window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)

// bootstrap the game
loadScene(Menu)