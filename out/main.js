var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// source/scenes/menu.ts
var exports_menu = {};
__export(exports_menu, {
  alive: () => {
    {
      return alive;
    }
  }
});
var alive;
var init_menu = __esm(() => {
  console.log("Hello from menu!");
  alive = [];
});

// source/main.ts
async function loadScene(module) {
  if (!module.alive) {
    alert("Module needs a .alive exported array to be loaded as a scene!");
    throw new Error("Scene does not have an alive array");
  }
  actualScene = module;
}
var step = function() {
  for (let i = 0;i < actualScene.alive.length; i++) {
    actualScene[i].step();
  }
  window.requestAnimationFrame(step);
};
var actualScene = await Promise.resolve().then(() => (init_menu(), exports_menu));
var canvas = document.getElementById("game_canvas");
if (!canvas) {
  alert("Canvas not found!");
  throw new Error("Canvas not found");
}
var ctx = canvas.getContext("2d");
window.requestAnimationFrame(step);
export {
  loadScene,
  ctx,
  canvas,
  actualScene
};
