export interface Scene {
  load?:    Function,
  drop?:    Function,
  alive?:   Function,
  entities: Entity[]
}

export interface Entity {
  step?: Function,
}

export interface Paintable extends Entity {
  x: number,
  y: number,
  source: string,
  image?: HTMLCanvasElement
}

export enum direction {
  right, left
}

export interface GameObject extends Paintable {
  solid: boolean,
  velX: number,
  velY: number
  direction?: direction
  contacts?: {
    up?:     GameObject | null,
    down?:   GameObject | null,
    right?:  GameObject | null,
    left?:   GameObject | null,
  }
}