import { ZOOM_LEVEL } from "../config";
import { GameObject } from "../interfaces";
import { load } from "../scenes/course-select";
import { ActiveKeys } from "../utils/key-mapping";
import { Drop } from "../utils/objects";
import { cooldown } from "../utils/other";
import { Paint } from "../utils/painting";
import { update_pos } from "../utils/physics";
import { cat } from "./black-cat";
import { cauldron } from "./cauldron";
import { plataforms } from "./plataform";


const avaliableSpaces: (Herb | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export let herbs: Herb[] = []
function reloadHerbReferences() {
  load()
}

function getNextPlatPos() {
  for(let i = 0; i < avaliableSpaces.length; i++)
    for(let j = 0; j < avaliableSpaces[i].length; j++)
      if(!avaliableSpaces[i][j])
        return [i, j]
}

export class Herb implements GameObject {
  solid = false
  x: number
  y: number
  velX: number = 0
  velY: number = 0
  source: string
  herbsIndex: {i: number, j: number}

  constructor(type: string) {
    const [i, j] = getNextPlatPos()!
    this.x = plataforms[j].x + ((j - 1) * 70);
    this.y = plataforms[i].y + 6 * ZOOM_LEVEL;
    avaliableSpaces[i][j] = this;
    this.herbsIndex = {i, j}

    switch(type) {
      case 'waterleaf': this.source = "/source/assets/waterleaf.png"; break;
      default: throw new Error('This herb type doesnt exist!');
    }
  }

  step() {
    if(ActiveKeys['x'] && Contacts(this, cat)) cooldown('cat-push', .2, () => {
      this.step = fall;
    })
    Paint(this)
  }

  drop() {
    herbs = avaliableSpaces.flat().filter(h => h != null)
    alert('Cauldron flashed!')
  }
}

function fall() {
  // apply gravity
  this.velY *= .9
  this.velY -= .8
  
  if(this.y <= cauldron.y) {
    console.log(avaliableSpaces)
    avaliableSpaces[this.herbsIndex.i][this.herbsIndex.j] = null;
    reloadHerbReferences()
  }

  Paint(this)
  update_pos(this)
}

function Contacts(obj: GameObject, obj2: GameObject): boolean {
  if(!obj.image || !obj2.image) return false;
  const distX = Math.abs(obj.x - obj2.x) - (obj.image.width / 2 + obj2.image.width / 2)
  const distY = Math.abs(obj.y - obj2.y) - (obj.image.height / 2 + obj2.image.height / 2)
  return distX < 0 && distY < 0
}

new Herb('waterleaf')
new Herb('waterleaf')