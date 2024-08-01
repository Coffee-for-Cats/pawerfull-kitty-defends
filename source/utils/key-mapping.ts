export const ActiveKeys = {}

document.onkeydown = function SetPressedKey(event) {
  ActiveKeys[event.key] = true;
}

document.onkeyup = function DropPressedKey(event) {
  ActiveKeys[event.key] = false;
}
