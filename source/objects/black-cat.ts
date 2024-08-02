import { GameObject, Paintable, Scene } from "../interfaces"
import { Paint } from "../utils/painting"
import { move } from "../utils/physics";


const cat: GameObject = {
  solid: false,
  x: 0, y: 0,
  velX: 0, velY: 0,
  source: '/source/assets/blackcat.png'
}

export function step(scene: Scene) {
  // gravity
  cat.velY -= 0.2;
  // air friction
  cat.velX -= cat.velX * .1
  cat.velY -= cat.velY * .1

  const vec = [cat.velX, cat.velY]
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  move(cat, vec, solidObjects);

  Paint(cat as Paintable)
}