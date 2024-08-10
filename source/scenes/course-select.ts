import type { Entity } from '../interfaces'
import { cat } from '../objects/black-cat'
import { plataforms } from '../objects/plataform'


export const entities: Entity[] = [
  cat,
  ...plataforms
]

export function load() {
  
}
