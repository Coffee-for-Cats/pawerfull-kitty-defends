import type { Entity } from '../interfaces'
import { cat } from '../objects/black-cat'
import { plataforms } from '../objects/plataform'
import { cauldron } from '../objects/cauldron'
import { herbs } from '../objects/herbs'

export let entities: Entity[] = [];
export function reloadExposedObjects() {
  entities = [
    cat,
    ...plataforms,
    cauldron,
    ...herbs
  ]
}
reloadExposedObjects()

export function load() {
  
}
