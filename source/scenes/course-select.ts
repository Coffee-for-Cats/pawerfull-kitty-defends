import type { Entity } from '../interfaces'
import * as blackCat from '../objects/black-cat'
import { plataform, plataform2 } from '../objects/plataform'

// just a test if typescript wuld brake my gema
const randomEntity: Entity = {
  step() {}
}

export const entities: Entity[] = [
  blackCat,
  plataform,
  plataform2
]

export function load() {
  
}
