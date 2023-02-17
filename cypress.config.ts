import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 8000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://unitedfebucket.s3-website.eu-west-2.amazonaws.com",
  },
});
