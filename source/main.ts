interface Scene {
  alive(): void,
  entities: any[]
}

export let actualScene: Scene;

loadScene(await import('./scenes/menu.ts'))

export async function loadScene(module: any) {
  if(!module.alive || !module.entities) {
    alert('Module does not contain alive or entities exports!')
    throw new Error('Module does not contain alive or entities exports')
  }
  actualScene = module;
}

export const canvas = document.getElementById('game_canvas') as HTMLCanvasElement;
if(!canvas) { alert('Canvas not found!'); throw new Error('Canvas not found'); }
export const ctx = canvas.getContext('2d');

function step() {
  for(let i = 0; i < actualScene.entities.length; i++) {
    actualScene.alive()
    actualScene.entities[i].step(actualScene)
  }
  window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)