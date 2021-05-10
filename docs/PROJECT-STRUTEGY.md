# Project Strategies

## Styling
I tried to use Sass, Bootstrap and styled-components. Although normally it is better to choose one family:
 * For prototyping, MVP, POC or one-man-projects I choose Sass + Bootstrap (or Tailwind).
 * For big teams, enterprise projects or long life projects I choose Styled-components (or CSS modules).
 
## React Component Folder
I created a folder for each component to put all related files into it. In such case some developers rename the `[Component].tsx` files into `index.tsc` to make it easier to refer, but I prefer to keep the name, so I can track them in IDE better.

## Unit tests (jest)
I tried to write at least one unit test for each concept. for unit tests I put a `__tests` folder besides each unit. 
* `redux actions` : /src/actions/__tests/marvel.test.ts
* `react components` : /src/components/Home/SuperheroCard/__tests/SuperheroCard.test.ts
* `apis` : /src/apis/__tests/marvelApi.test.ts

## End-to-end tests (cypress)
* `integration, e2e` : /cypress/integration/home.spec.ts
