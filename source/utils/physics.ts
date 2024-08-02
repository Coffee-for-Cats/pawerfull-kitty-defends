import { GameObject } from "../interfaces";


export function move(obj: GameObject, vec: number[], entities: GameObject[]) {
  
  const objImg = obj.image || { width: 0, height: 0 }
  
  // for x axis, calculate, for every entity, the minimum distance.
  let moving_x = vec[0]
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    // future position considered
    const distX = Math.abs(obj.x + vec[0] - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if(distX < 0 && distY < 0) {
      moving_x -= distX
      obj.velX = 0
    }
  }

  obj.x += moving_x;

  // for y axis, calculate, for every entity, the minimum distance.
  let moving_y = vec[1]
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    // future position considered
    const distX = Math.abs(obj.x - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y + vec[1] - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if(distX < 0 && distY < 0) {
      moving_y -= distY
      obj.velY = 0
    }
  }

  obj.y += moving_y
}