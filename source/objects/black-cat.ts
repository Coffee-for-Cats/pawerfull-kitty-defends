import { direction, GameObject, Paintable, Scene } from "../interfaces"
import { ActiveKeys } from "../utils/key-mapping";
import { cooldown } from "../utils/other";
import { flipImage, Paint } from "../utils/painting"
import { update_pos } from "../utils/physics";


export const cat: GameObject = {
  solid: false,
  x: 0, y: 0,
  velX: 0, velY: 0,
  direction: direction.left,
  contacts: {},
  source: '/source/assets/blackcat.png',
  step
}

function step(scene: Scene) {
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  
  if(cat.contacts?.down) {
    if(ActiveKeys['ArrowUp']) cat.velY += 16
  }
  if(ActiveKeys['ArrowUp']) cat.velY += .3        // holds in the air
  if(ActiveKeys['ArrowLeft']) {
    if(cat.direction === direction.right) {
      flipImage(cat)
      cat.direction = direction.left
    }
    cat.velX -= 2
  }
  if(ActiveKeys['ArrowRight']) {
    if(cat.direction === direction.left) {
      flipImage(cat)
      cat.direction = direction.right
    }
    cat.velX += 2
  } 
  
  cat.velY -= 0.6 // gravity
  
  // constant air frictions
  cat.velY -= cat.velY * .04
  cat.velX -= cat.velX * .2

  update_pos(cat, solidObjects);

  Paint(cat as Paintable)
}