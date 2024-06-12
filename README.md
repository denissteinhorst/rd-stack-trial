# rd-stack-trial

just a quick test of a tech stack I would like to try ;)

## Project History

1. Created a new Nuxt 3 project,
1. Added: `Tailwind CSS`, `Apollo`, `Pinia`, `Vitest`, `Cypress` and `I18N` to the project,
1. Removed: the `BasicApp`-Component,
1. Added: very basic `Todo-App-Components` (static data / no API "yet"),
1. Added: prettier and eslint to the project (QOL),
1. Added: a Composable to perform basic CRUD operations on the Todos (https://graphqlzero.almansi.me/api)
1. Added: a store to manage the Todos (Pinia) -not persistent yet-
1. Chore: Updated the `README.md`; Light-Refactoring (removed unused code, added comments, types, etc.)
1. Added: `@vitejs/plugin-vue` to the project
1. Added: Unit-Tests for the Composables
1. Added: E2E-Tests for the Todo-App

## Usage

This project uses [pnpm](https://pnpm.io/) as the package manager. You can install it by running the following command:
`npm install -g pnpm` assuming you have Node.js installed. ;)

It also uses NVM to manage the Node.js version in the first place. You can install it by having a look at the ["Installing and Updating"](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) section of their Repository.

```bash
pnpm install # install dependencies
pnpm dev # Start the development server on `http://localhost:3000`
pnpm build # Build the application for production
pnpm preview # Locally preview production build
pnpm postinstall # Run nuxt post install script
pnpm test:unit # Run unit tests
pnpm test:unit-ui # Run unit tests with UI
pnpm test:e2e # Run E2E tests (Starts server, waits for URL, then runs test command; when the tests end, shuts down server)
pnpm lint:eslint # Run eslint
pnpm lint:prettier # Run prettier
pnpm lintfix # Run eslint --fix and prettier --write
```

## Command History

In case you want to trace my steps and see how I got here, here is a list of commands I ran to get to this point.

```bash
# NUXT
- nvm use --lts # Use the latest LTS version of Node.js
- node -v && npm -v # v20.12.2 | 10.5.0
- npx nuxi init # Create a new Nuxt 3 project
- mv nuxt-app/* . # Move the contents of the created directory to the root
- rm -rf nuxt-app # Remove the created directory
- pnpm dev # Check if the project runs
- git add . && git commit -m "Init Nuxt" # Commit the changes

# TAILWIND
- pnpm add -D tailwindcss postcss autoprefixer
- pnpx tailwindcss init # Create a Tailwind CSS config file
- # Add PostCSS config, Template-Paths, Directives and Global styles as described in the documentation
- git add . && git commit -m "Add Tailwind" # Commit the changes

# Apollo
- pnpm add -D @nuxtjs/apollo@next
- # Enable Module, Add Nuxt-Apollo Config as described in the documentation
- pnpm dev # Check if the Apollo is working using the example code
- git add . && git commit -m "Add Apollo" # Commit the changes

# Pinia
- pnpm add @pinia/nuxt
- # Enable Module, Add Nuxt-Pinia Config as described in the documentation
- pnpm dev # Check if the pinia is working using the example code
- git add . && git commit -m "Add Pinia" # Commit the changes

# Vitest
- pnpm add -D @nuxt/test-utils vitest @vue/test-utils @vitejs/plugin-vue happy-dom
- # Add Vitest Config as described in the documentation
- # Add run-scripts, moved app to BasicApp Component, added a test for to check if the tests are working
- pnpm test:unit # Check if the vitest is working
- git add . && git commit -m "Add Vitest" # Commit the changes

# Cypress
- pnpm add -D cypress start-server-and-test
- pnpx cypress open # Open the Cypress GUI - Select: E2E-Test, Chrome
- # Add E2E-Test, Add run-scripts using start-server-and-test
- pnpm test:e2e # Check if the cypress is working
- git add . && git commit -m "Add Cypress" # Commit the changes

# I18N
- npx nuxi@latest module add i18n
- # Add I18N Config as described in the documentation
- pnpm dev # Check if the I18N is working using the example code
- git add . && git commit -m "Add I18N" # Commit the changes

# Prettier & Eslint
- pnpm add prettier eslint-config-prettier eslint-plugin-prettier
- pnpm add -D eslint @nuxt/eslint @nuxt/eslint-config prettier-plugin-tailwindcss
- # Add Prettier Config, Add Eslint Config, Add run-scripts
- pnpm lintfix # Check if the Prettier & Eslint are working (and fix things :P)
- git add . && git commit -m "Add Prettier/ESLint" # Commit the changes
```

## Documentation

As I really disliked the cluttered `Command History`-Section, I decided to move the documentation links to this section.

- [PNPM](https://pnpm.io/installation)
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
- [Nuxt.js](https://nuxt.com/docs/getting-started/installation)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs)
- [Apollo](https://apollo.vuejs.org/guide/apollo/)
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)
- [Vitest](https://nuxt.com/docs/getting-started/testing)
- [Cypress](https://docs.cypress.io/guides/component-testing/vue/overview)
- [start-server-and-test](https://github.com/bahmutov/start-server-and-test)
- [I18N](https://i18n.nuxtjs.org/docs/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [Eslint](https://eslint.nuxt.com/packages/config)
- [Tailwind CSS Plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

```

```
