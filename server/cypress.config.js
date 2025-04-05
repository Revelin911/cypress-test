import { defineConfig } from 'cypress'

module.exports = defineConfig({
  component: {
    supportFile: 'cypress/support/component.js',
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

});
