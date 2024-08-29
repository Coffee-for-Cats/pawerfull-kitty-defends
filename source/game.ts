import { CANVAS_SOURCE } from "./config";
import { Scene } from "./interfaces";

export function startGameLoop() {
  window.requestAnimationFrame(step)
}

export let actualScene: Scene;

// Canvas where to draw the game
export const Canvas = document.getElementById(CANVAS_SOURCE) as HTMLCanvasElement;
if(!Canvas) { throw new Error('Canvas not found') }
// Ctx how to draw the game
export const Ctx = Canvas.getContext('2d') as CanvasRenderingContext2D;
if(!Ctx) { throw new Error(`#${CANVAS_SOURCE} is not a canvas!`) }
Ctx.imageSmoothingEnabled = false;

function step() {
  Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
  if(actualScene.step) actualScene.step()
  for(let i = 0; i < actualScene.entities.length; i++) {
    actualScene.entities[i].step(actualScene)
  }
  window.requestAnimationFrame(step)
}

export async function loadScene(module: Scene) {
  if(actualScene?.drop) actualScene.drop(module);
  if(module.load) module.load(actualScene);
  actualScene = module;
}