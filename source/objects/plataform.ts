// import type { Scene } from '../main'
import { Paint } from "../utils/painting";


export const plataform1 = {
  x: 200, y: -80,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export const plataform2 = {
  x: 200, y: 40,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export const plataform3 = {
  x: 200, y: 160,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export function step() {
  Paint(this)
}