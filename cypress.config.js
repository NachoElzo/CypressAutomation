const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Global configurations
  viewportHeight: 1080,
  viewportWidth: 1920,


  //Configurations for e2e folder
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    //Excludes the folder of the examples test
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'] // **/== wild card for path

  },
});
