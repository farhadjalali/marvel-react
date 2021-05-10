# Project Structure

## Component folders

`components` ............................... All react components
* `_utils` ............................... Utility components (e.g. spinner, etc)
* `App` .................................... root  
* `Header` ............................... page header
* `Home` .................................. home page
    * `CharacterCard` .............. superhero card
* `Superhero` ........................... superhero page
    * `ComicCard` .................... comic card
    * `ComicModal` ................... comic modal


## Redux folders
* `actions` ............................... actions (marvel actions are mostly async)
* `middleware` ........................... redux middle-wares (logger, thunk, ...) 
* `reducers` .............................. redux reducers
* `store` ................................... Root State + Store object

## Other folders
* `apis` .................................... API clients
    * `__tests` ......................... API call unit tests
* `assets` .................................. Assets (images, ...)
* `config` .................................. config object (typed config coming from .env or global environment variables)
* `style` ................................... Scss general styles broken by best practice patterns
* `types` ................................... Types and models
* `utils` ................................... Utility functions (e.g. global functions, web vitals, etc)
