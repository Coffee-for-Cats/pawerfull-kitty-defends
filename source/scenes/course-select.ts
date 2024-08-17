import type { Entity } from '../interfaces'
import { cat } from '../objects/black-cat'
import { plataforms } from '../objects/plataform'
import { cauldron } from '../objects/cauldron'


export const entities: Entity[] = [
  cat,
  ...plataforms,
  cauldron
]

export function load() {
  
}
