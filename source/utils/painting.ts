import { Canvas, Ctx } from "../main";
import { Paintable } from "../interfaces";

const ZoomLevel = 6;

export const Camera = {
  x: 0,
  y: 0,
  setX(x: number) { Camera.x = x },
  setY(y: number) { Camera.y = y },
}

const cachedSources = {}

export function Paint(obj: Paintable) {
  if(!cachedSources[obj.source as string]) {
    cacheSource(obj.source as string).then((img: HTMLCanvasElement) => {
      obj.image = img;
    })
  }

  const source = cachedSources[obj.source as string]
  
  const x = obj.x + Camera.x + (Canvas.width / 2) - (source.width / 2)
  // y inverted due to canvas rendering
  const y = -obj.y + Camera.y + (Canvas.height / 2) - (source.height / 2)
  
  Ctx.drawImage(
    source, 
    x, y,
  )
}

// saves and returns a canvas of the sprite source passed
export async function cacheSource(stringSrc: string) {
  const tempImg = document.createElement('img')
  tempImg.src = stringSrc
  
  cachedSources[stringSrc] = document.createElement('canvas') as HTMLCanvasElement
  
  // await the image load to print it in the offscreen canvas
  await new Promise<void>( (res, err) => {
    tempImg.onerror = () => { 
      err()
      throw new Error(`Error loading ${stringSrc}. File not found.`); 
    }
    tempImg.onload = () => res()
  })
  
  cachedSources[stringSrc].width = tempImg.width * ZoomLevel
  cachedSources[stringSrc].height = tempImg.height * ZoomLevel

  const tempCtx = cachedSources[stringSrc].getContext('2d') as CanvasRenderingContext2D
  tempCtx.imageSmoothingEnabled = false

  tempCtx.drawImage(
    tempImg, 0, 0, tempImg.width * ZoomLevel, tempImg.height * ZoomLevel
  )

  return cachedSources[stringSrc]
}