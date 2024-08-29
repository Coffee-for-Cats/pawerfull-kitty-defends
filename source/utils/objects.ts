import { GameObject, Scene } from "../interfaces";

export function Drop(object: GameObject, scene: Scene) {
  if(object?.drop) object.drop(scene);
  scene.entities.splice(
    scene.entities.findIndex((atual) => object == atual), 1
  )
}