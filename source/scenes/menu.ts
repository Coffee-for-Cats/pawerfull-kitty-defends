import { loadScene } from "../game";
import { CONTAINER_SOURCE } from "../config";

import * as SelectingScene from './course-select'

export const entities: any[] = [];

const title = document.createElement('h2')
title.innerText = "Catnip Brewer"

const button = document.createElement('button')
button.innerText = "Play"
button.onclick = () => {
  loadScene(SelectingScene)
}

const div = document.createElement('div')
div.style['position'] = 'absolute'
div.append(title, button);

const container = document.getElementById(CONTAINER_SOURCE) as HTMLDivElement;

export function load() {
  container.append(div)
}

export function drop() {
  container.removeChild(div)
}