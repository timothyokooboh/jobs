# Portfolio

### Overview
This project implements a monorepo architecture powered by Yarn workspaces and Turborepo.
There are three workspaces.
- @app/foundations
    - Located at packages/foundations
    - Contains design tokens for colors, typography and responsive breakpoints.
    - Uses `style-dictionary`
      
- @app/ui-library
  - Located at packages/ui-library
  - Contains base components such as BaseButton and BaseTextField (input field and textarea)
  - Uses `Vue 3`

- @app/jobs
  - Located at apps/jobs
  - Contains the actual tech jobs we app
  - Uses `Nuxt 3`

## Intsallation
`yarn`

## Start Development Server
`yarn dev`

## Unit/Component Test
`yarn test`

## End-to-end Test
`yarn e2e`

## Build
`yarn build`
