import { GameObject } from "../interfaces";


// make an object move considering the entities passed as arguments.
// *MODIFY* the actual object speed and position.
export function update_pos(obj: GameObject, entities: GameObject[]) {
  const objImg = obj.image || { width: 0, height: 0 }

  if(obj.contacts) {
    obj.contacts.left = null
    obj.contacts.right = null;
    obj.contacts.down = null;
    obj.contacts.up = null;
  }

  // for y axis, calculate, for every entity, the minimum distance.
  for(const ent of entities) {
    const entImg = ent.image || { width: 0, height: 0 }
    // future position considered
    const distX = Math.abs(obj.x - ent.x) - (objImg.width / 2 + entImg.width / 2)
    const distY = Math.abs(obj.y + obj.velY - ent.y) - (objImg.height / 2 + entImg.height / 2)

    if(distX < 0 && distY < 0) {
      // limits the movement to the space avaliable
      obj.velY += distY * Math.sign(obj.velY)
      // updates contacts information about the object
      if(obj.contacts) {
        if(obj.y > ent.y) obj.contacts.down = ent;
        if(obj.y < ent.y) obj.contacts.up = ent;
      }
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
      // limits the movement to the space avaliable
      obj.velX += distX * Math.sign(obj.velX)
      if(obj.contacts) {
        if(obj.x > ent.x) obj.contacts.left = ent;
        if(obj.x < ent.x) obj.contacts.right = ent;
      }
    }
  }

  obj.x += obj.velX;
}