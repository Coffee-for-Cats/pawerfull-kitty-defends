// import type { Scene } from '../main'
import { Paint } from "../utils/painting";


export const plataform = {
  x: 0, y: -200,
  source: '/source/assets/plataform.png',
  solid: true,
  step
}

export function step() {
  Paint(plataform)
}