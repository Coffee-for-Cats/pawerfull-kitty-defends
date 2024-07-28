export let actualScene = await import('./scenes/menu.ts')

export async function loadScene(module: any) {
  if(!module.alive) {
    alert('Module needs a .alive exported array to be loaded as a scene!')
    throw new Error('Scene does not have an alive array')
  }
  actualScene = module;
}

export const canvas = document.getElementById('game_canvas') as HTMLCanvasElement;
if(!canvas) { alert('Canvas not found!'); throw new Error('Canvas not found'); }
export const ctx = canvas.getContext('2d');

function step() {
  for(let i = 0; i < actualScene.alive.length; i++) {
    actualScene[i].step();
  }
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);