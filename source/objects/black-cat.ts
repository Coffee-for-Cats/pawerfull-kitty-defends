import { direction, GameObject, Paintable, Scene } from "../interfaces"
import { ActiveKeys } from "../utils/key-mapping";
import { cooldown } from "../utils/other";
import { flipImage, Paint } from "../utils/painting"
import { update_pos } from "../utils/physics";

const accMult = 1;

export const cat: GameObject = {
  solid: false,
  x: 200, y: 60,
  velX: 0, velY: 0,
  direction: direction.left,
  contacts: {},
  source: '/source/assets/blackcat.png',
  step
}

function step(scene: Scene) {
  // physics layer
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  
  catsControls()
  catsPhysics(solidObjects)
  turnPlataformSolidity()

  Paint(cat as Paintable)
}

function catsPhysics(solidObjects: GameObject[]) {
  cat.velY -= 0.6 // gravity
  
  // constant air frictions
  cat.velY -= cat.velY * .04 * accMult
  cat.velX -= cat.velX * .2  * accMult

  update_pos(cat, solidObjects);
}

function catsControls() {
  if(cat.contacts?.down) {
    if(ActiveKeys['ArrowUp']) cat.velY += 12 * accMult
  }
  if(ActiveKeys['ArrowUp']) cat.velY += .4 * accMult        // holds in the air
  
  if(ActiveKeys['ArrowLeft']) {
    if(cat.direction === direction.right) {
      flipImage(cat)
      cat.direction = direction.left
    }
    cat.velX -= 2 * accMult
  }
  if(ActiveKeys['ArrowRight']) {
    if(cat.direction === direction.left) {
      flipImage(cat)
      cat.direction = direction.right
    }
    cat.velX += 2 * accMult
  } 
}

import { plataform1, plataform2, plataform3 } from "./plataform";
function turnPlataformSolidity() {
  for(const plat of [plataform1, plataform2, plataform3]) {
    plat.solid = cat.y > plat.y + 49 ? true : false; 
  }
}