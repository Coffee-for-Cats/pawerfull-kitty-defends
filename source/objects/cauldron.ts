import { GameObject, Paintable } from "../interfaces";
import { Paint } from "../utils/painting";

export const cauldron: GameObject = {
  solid: false,
  x: 200, y: -180,
  velX: 0, velY: 0,
  source: '/source/assets/cauldron.png',
  step
}

function step() {
  Paint(this);
}