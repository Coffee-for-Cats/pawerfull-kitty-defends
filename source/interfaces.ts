export interface Scene {
  load?: Function,
  drop?: Function,
  alive?: Function,
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

export interface GameObject extends Paintable {
  solid: boolean,
  velX: number,
  velY: number
}