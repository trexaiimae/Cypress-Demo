const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
   video: true,                                     
  screenshotOnRunFailure: true,           
  
  env:{
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,
},
   projectId: "p2v2aj",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/**/*.js"

  },
});
