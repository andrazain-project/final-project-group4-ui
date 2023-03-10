const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
  viewportHeight: 660,
  viewportWidth: 1000,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: "https://www.globalsqa.com/angularJs-protractor/BankingProject/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      // implement node event listeners here
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        "module-resolver",
        {
          alias: {
            "@tests": "./tests",
            "@helper": "./tests/helper"
          }
        }
      ]);
      on("file:preprocessor", browserify(options));
    },
    specPattern: "tests/scenario/**/*.test.js"
  }
});
