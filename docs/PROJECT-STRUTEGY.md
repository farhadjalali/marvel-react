# Project Strategy

## Styling
I tried to use Sass, Bootstrap and styled-components. Although normally it is better to choose one family:
 * For prototyping, MVP, POC or one-man-projects I choose Sass + Bootstrap (or Tailwind).
 * For big teams, enterprise projects or long life projects I choose Styled-components (or CSS modules).
 
## React Components in Project Structure
I create folder for each component to put all related files into that. In this case some developers rename the [Component].tsx files into index.tsc to make the path shorter while importing them, but I prefer to left the name to the component name so I can trace them better in IDE.

## Test
