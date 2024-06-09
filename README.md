# rd-stack-trial
just a quick test of a tech stack I would like to try ;)

## Usage
This project uses [pnpm](https://pnpm.io/) as the package manager. You can install it by running the following command:
`npm install -g pnpm` assuming you have Node.js installed. ;)

```bash
pnpm install # install dependencies
pnpm run dev # Start the development server on `http://localhost:3000`
pnpm run build # Build the application for production
pnpm run preview # Locally preview production build
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
- pnpm add -D tailwindcss postcss autoprefixer # Install Tailwind CSS
- pnpx tailwindcss init # Create a Tailwind CSS config file
- # Add PostCSS config, Template-Paths, Directives and Global styles as described in the [documentation](https://tailwindcss.com/docs/guides/nuxtjs)
- git add . && git commit -m "Add Tailwind" # Commit the changes

# Apollo
- pnpm add -D @nuxtjs/apollo@next
- # Enable Module, Add Nuxt-Apollo Config as described in the [documentation](https://apollo.vuejs.org/guide/apollo/)
- pnpm dev # Check if the Apollo is working using the example code
- git add . && git commit -m "Add Apollo" # Commit the changes

# Pinia
- pnpm add @pinia/nuxt
- # Enable Module, Add Nuxt-Pinia Config as described in the [documentation](https://pinia.vuejs.org/ssr/nuxt.html)
- pnpm dev # Check if the pinia is working using the example code
- git add . && git commit -m "Add Pinia" # Commit the changes

# Vitest
- pnpm add -D @nuxt/test-utils vitest @vue/test-utils happy-dom
- # Add Vitest Config as described in the [documentation](https://vitest.io/docs/getting-started/nuxt)
- # Add run-scripts, moved app to BasicApp Component, added a test for to check if the tests are working
- git add . && git commit -m "Add Vitest" # Commit the changes
```
