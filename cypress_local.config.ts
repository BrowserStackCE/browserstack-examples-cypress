import { defineConfig } from 'cypress'

export default defineConfig({
  fileServerFolder: '.',
  fixturesFolder: 'cypress/fixtures',
  trashAssetsBeforeRuns: true,
  reporter: 'mochawesome',
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    reportFilename: 'testReport',
    charts: true,
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mm/dd/yyyy_HH:MM:ss',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: false,
  },
})
