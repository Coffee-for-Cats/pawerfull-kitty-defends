import { GameObject, Paintable, Scene } from "../interfaces"
import { ActiveKeys } from "../utils/key-mapping";
import { Paint } from "../utils/painting"
import { move } from "../utils/physics";


const cat: GameObject = {
  solid: false,
  x: 0, y: 0,
  velX: 0, velY: 0,
  source: '/source/assets/blackcat.png'
}

export function step(scene: Scene) {
  // controls
  if(ActiveKeys['ArrowUp']) cat.velY += .8;
  
  // gravity
  cat.velY -= 0.6;
  // air friction
  cat.velX -= cat.velX * .08
  cat.velY -= cat.velY * .08

  //const vec = [cat.velX, cat.velY]
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  move(cat, solidObjects);

  Paint(cat as Paintable)
}