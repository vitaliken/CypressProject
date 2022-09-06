const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 1024,

  e2e: {
    setupNodeEvents(on, config) {
      specPattern : "**/1-getting-started/**, **/2-advanced-examples**";
  },
}});