# PAWerfull Kitty Defends
This is a (not so) simple game about kitties defending their human's mage tower from the invasion of bad demonic creatures trying to steal your human's coffee.

# Run on your machine
I am using bun to build typescript.
```bash
bun build ./source/main.ts --outdir=out --watch
```
But feel free to use babel or whatever else that builds typescript.
See index.html, it is where the game is being loaded.
See also source/config.ts, it has some constants to be aware of.

## About the code
  The idea is having no framework, no libraries; also, there is no node_modules.
  
  ### Files and Organization
  - /source/main.ts is the entrypoint.
  - main controls the game loop and scenes; you can compile scenes individually, import()'ing them in runtime, or pack them together with the framework as I am doing in development.
  - a *scene* is a module that exports an entities array; you can 'loadScene' them.
    - Scenes can contain load, drop and step methods.
    - alive() and entity'es step()'s are called per frame.
    - An Entity needs a step() function; it recieves the actualScene as first parameter.
