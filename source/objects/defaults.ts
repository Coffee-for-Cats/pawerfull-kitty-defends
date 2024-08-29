import { direction, Entity } from "../interfaces";

export class DefaultObject implements Entity {
  solid = false
  x = 0
  y = 0
  velX = 0; velY = 0;
  source = '';
  direction: direction

  contacts = {up: null, down: null, right: null, left: null}

  constructor(overrides: any) {
    this.direction = direction.left

    // pretty hacky I think =(
    for(let key in overrides) {
      this[key] = overrides[key]
    }
  }

  step() {}
  drop() {}
}