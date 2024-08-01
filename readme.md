# Kitties vs Demon Doggies
This is a simple game about kitties defending their human's mage tower from the invasion of bad demonic dogs.

# Run on your machine
```bash
bun build ./source/main.ts --outdir=out --watch
```

## About the code
  The idea is having no framework, no libraries; just standalone typescript.
  
  ### Files and Organization
  - /source/main.ts is the entrypoint.
  - main controls the game loop and scenes; you can compile scenes individually, import()'ing them in runtime, or pack them in a single minified .js file.
  - a *scene* is a module that exports an entities array; you can 'loadScene' them.
    - Scenes can contain load, drop and alive methods.
    - alive() and entity'es step()'s are called per frame.
  
  ### Configurations
  Since I am not a good developer, the configs are not in a single file.
  Rather, you should access the files responsible for each thing in the game.
  Basically, most of them should be in `/source/utils/`.
  It should not be that hard to find, I hope =).
