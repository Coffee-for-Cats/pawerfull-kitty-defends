import { GameObject, Paintable, Scene } from "../interfaces"
import { ActiveKeys } from "../utils/key-mapping";
import { Paint } from "../utils/painting"
import { contacts, loosy_conctacts_update, update_pos } from "../utils/physics";


const cat: GameObject = {
  solid: false,
  x: 0, y: 0,
  velX: 0, velY: 0,
  source: '/source/assets/blackcat.png'
}

export function step(scene: Scene) {
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  loosy_conctacts_update(cat, solidObjects, 2);
  // controls & movement
  if(contacts.down) {
    if(ActiveKeys['ArrowUp']) cat.velY += 16      // jump
  }
  if(ActiveKeys['ArrowUp']) cat.velY += .1      // jump
  if(ActiveKeys['ArrowLeft']) cat.velX -= .8    // left and right
  if(ActiveKeys['ArrowRight']) cat.velX += .8  
  
  cat.velY -= 0.6 // gravity
  
  // constant air frictions
  cat.velY -= cat.velY * .04
  cat.velX -= cat.velX * .08

  update_pos(cat, solidObjects);

  Paint(cat as Paintable)
}