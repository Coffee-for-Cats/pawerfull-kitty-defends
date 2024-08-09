// import type { Scene } from '../main'
import { GameObject } from "../interfaces";
import { Paint } from "../utils/painting";


export const plataform1: GameObject = {
  x: 200, y: -80,
  velX: 0, velY : 0,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export const plataform2 = {
  x: 200, y: 40,
  velX: 0, velY : 0,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export const plataform3 = {
  x: 200, y: 160,
  velX: 0, velY : 0,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export function step() {
  Paint(this)
}