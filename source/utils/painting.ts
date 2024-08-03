import { Canvas, Ctx } from "../main";
import { Paintable } from "../interfaces";
import { ZOOM_LEVEL } from "../config" 

export const Camera = {
  x: 0,
  y: 0,
  setX(x: number) { Camera.x = x },
  setY(y: number) { Camera.y = y },
}

export function Paint(obj: Paintable) {
  if(!obj.image) obj.image = getSource(obj.source)

  const source = obj.image as HTMLCanvasElement;
  
  const x = obj.x + Camera.x + (Canvas.width / 2) - (source.width / 2)
  // y inverted due to canvas rendering
  const y = -obj.y + Camera.y + (Canvas.height / 2) - (source.height / 2)
  
  Ctx.drawImage(
    source, 
    ~~x, ~~y,
  )
}

const cachedSources = {}
// saves and returns a canvas of the sprite source passed
export function getSource(stringSrc: string) {
  if(cachedSources[stringSrc]) return cachedSources[stringSrc];

  const tempImg = document.createElement('img')
  tempImg.src = stringSrc
  
  cachedSources[stringSrc] = document.createElement('canvas') as HTMLCanvasElement
  
  tempImg.onload = function initializeBuffer() {
    cachedSources[stringSrc].width = tempImg.width * ZOOM_LEVEL
    cachedSources[stringSrc].height = tempImg.height * ZOOM_LEVEL

    const tempCtx = cachedSources[stringSrc].getContext('2d') as CanvasRenderingContext2D
    tempCtx.imageSmoothingEnabled = false

    tempCtx.drawImage(
      tempImg, 0, 0, tempImg.width * ZOOM_LEVEL, tempImg.height * ZOOM_LEVEL
    )
  }

  return cachedSources[stringSrc]
}