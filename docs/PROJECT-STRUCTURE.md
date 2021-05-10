# Project Structure

## Component folders

`src/components` ............................... All react components
* `_utils` ............................... Utility components (e.g. spinner, etc)
* `App` .................................... root  
* `Header` ............................... page header
* `Home` .................................. home page
    * `CharacterCard` .............. superhero card
* `Superhero` ........................... superhero page
    * `ComicCard` .................... comic card
    * `ComicModal` ................... comic modal


## Redux folders in 'src'
* `actions` ............................... actions (marvel actions are mostly async)
* `middleware` ........................... redux middle-wares (logger, thunk, ...) 
* `reducers` .............................. redux reducers
* `store` ................................... Root State + Store object

## Other folders in 'src'
* `apis` .................................... API clients
* `assets` .................................. Assets (images, ...)
* `config` .................................. config object (typed config coming from .env or global environment variables)
* `style` ................................... Scss general styles broken by best practice patterns
* `types` ................................... Types and models
* `utils` ................................... Utility functions (e.g. global functions, web vitals, etc)

## Test folders
* `cypress` .................................... Cypress tests
    * `integration` ........................ Cypress integration and e2e tests
* `apis/__tests` ............................. API call unit tests (jest)
