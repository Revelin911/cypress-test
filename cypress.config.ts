import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});