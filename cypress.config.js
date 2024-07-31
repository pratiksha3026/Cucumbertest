// const cucumber = require('cypress-cucumber-preprocessor').default

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       const cucumber = require('cypress-cucumber-preprocessor').default;
//       on('file:preprocessor',cucumber())
//     },
//     specPattern: "cypress/e2e/**/*.feature",
//     supportFile: 'cypress/support/e2e.js'
//   },
// });

const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
  },
});


// const { defineConfig } = require('cypress');
// const cucumber = require('cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/**/*.feature',
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', cucumber());
//     },
//   },
// });
