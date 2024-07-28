# Kitties vs Demon Doggies
This is a simple game about kitties defending their human's mage tower from the invasion of bad demonic dogs.

# Run on your machine
```bash
bun build ./source/main.ts --outdir=out --watch
```

## About the code
  The idea is having no framework, no libraries; just standalone typescript.
  
  ### Files and Organization
  - /source/main.ts is the entrypoint. It's defined as a ejs6 module, but it's transpiled down to plain javascript using bun.
  - main controls the game loop, but sceneController gives the functions to modify the main's exported actualScene, executing '.step' for every gameObject inside a scene's exported 'alive' array.