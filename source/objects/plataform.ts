// import type { Scene } from '../main'
import { GameObject, Paintable } from "../interfaces";
import { Paint } from "../utils/painting";


class Plataform implements GameObject {
  x: number;
  y: number;
  solid = true;
  velX = 0;
  velY = 0;
  source = '/source/assets/plataform.png';

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  step() {
    Paint(this)
  }
}

export const plataforms = [
  new Plataform(200, -80),
  new Plataform(200, 40),
  new Plataform(200, 160)
]