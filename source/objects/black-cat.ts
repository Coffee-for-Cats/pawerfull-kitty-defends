import { direction, GameObject, Paintable, Scene } from "../interfaces"
import { ActiveKeys } from "../utils/key-mapping";
import { cooldown } from "../utils/other";
import { flipImage, Paint } from "../utils/painting"
import { update_pos } from "../utils/physics";
import { DefaultObject } from "./defaults";
import { plataforms } from "./plataform";

const accMult = 1;

export const cat: GameObject = new DefaultObject({
  x: 200, y: 120,
  source: '/source/assets/blackcat.png',
  step
})

function step(scene: Scene) {
  // physics layer
  const solidObjects = scene.entities.filter((e: any) => e.solid ) as GameObject[]
  
  switchPlataformSolidity()
  catsControls()
  catsPhysics(solidObjects)

  Paint(cat)
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
    if(ActiveKeys['ArrowUp']) cooldown('jump', .2, () => {
      cat.velY += 12 * accMult
    })
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
  if(ActiveKeys['ArrowDown']) {
    plataforms[1].solid = false;
    plataforms[2].solid = false;
  }
}

function switchPlataformSolidity() {
  for(const plat of plataforms) {
    const switchGap = cat.image 
      ? cat.image!.height! / 2 + (plat as GameObject).image!.height / 2 - 1 
      : 49;
    plat.solid = cat.y > plat.y + switchGap ? true : false; 
  }
}