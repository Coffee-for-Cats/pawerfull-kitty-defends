import { GameObject } from "../interfaces";


// make an object move considering the entities passed as arguments.
// *MODIFY* the actual object speed and position.
export function update_pos(obj: GameObject, entities: GameObject[]) {
  const objImg = obj.image || { width: 0, height: 0 }

  // for y axis, calculate, for every entity, the minimum distance.
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    // future position considered
    const distX = Math.abs(obj.x - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y + obj.velY - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if(distX < 0 && distY < 0) {
      obj.velY += distY * Math.sign(obj.velY)
    }
  }

  obj.y += obj.velY

  // for x axis, calculate, for every entity, the minimum distance.
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    // future position considered
    const distX = Math.abs(obj.x + obj.velX - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if(distX < 0 && distY < 0) {
      obj.velX += distX * Math.sign(obj.velX)
    }
  }

  obj.x += obj.velX;
}

// 
export const contacts: {[index: string]: GameObject | null} = {
  up: null, down: null, left: null, right: null
}
// updates contacts with references to objects inside the gap (in px) of distance from obj
export function loosy_conctacts_update(obj: GameObject, entities: GameObject[], gap: number) {
  
  contacts.left = null
  contacts.right = null;
  contacts.down = null;
  contacts.up = null;
  
  const objImg = obj.image || { width: 0, height: 0 }
  
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    const distX = Math.abs(obj.x - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if (distX < gap && distY < gap) {
      if(obj.x > ent.x) contacts.left = ent;
      if(obj.x < ent.x) contacts.right = ent;
      if(obj.y > ent.y) contacts.down = ent;
      if(obj.y < ent.y) contacts.up = ent;
    }
  }
}