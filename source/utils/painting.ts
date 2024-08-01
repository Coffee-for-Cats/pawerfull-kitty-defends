import { Canvas, Ctx } from "../main";

const ZoomLevel = 6;

interface Paintable {
  x: number,
  y: number,
  image: string
}

export const Camera = {
  x: 0,
  y: 0,
  setX(x: number) { Camera.x = x },
  setY(y: number) { Camera.y = y },
}

const cachedSources = {}

export function Paint(obj: Paintable) {
  if(!cachedSources[obj.image]) cacheSource(obj.image)

  const source = cachedSources[obj.image]
  
  const x = obj.x + Camera.x + (Canvas.width / 2) - (source.width / 2)
  const y = obj.y + Camera.y + (Canvas.height / 2) - (source.height / 2)
  
  Ctx.drawImage(
    source, 
    x, y,
  )
}

async function cacheSource(stringSrc: string) {
  const tempImg = document.createElement('img')
  tempImg.src = stringSrc
  
  cachedSources[stringSrc] = document.createElement('canvas') as HTMLCanvasElement
  
  // await the image load to print it in the offscreen canvas
  await new Promise<void>( res => {
    tempImg.onload = () => res()
  })
  
  cachedSources[stringSrc].width = tempImg.width * ZoomLevel
  cachedSources[stringSrc].height = tempImg.height * ZoomLevel

  const tempCtx = cachedSources[stringSrc].getContext('2d') as CanvasRenderingContext2D
  tempCtx.imageSmoothingEnabled = false

  tempCtx.drawImage(
    tempImg, 0, 0, tempImg.width * ZoomLevel, tempImg.height * ZoomLevel
  )
}