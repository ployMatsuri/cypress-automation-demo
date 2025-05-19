const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({ plugins: [createEsbuildPlugin(config)] })
			on('file:preprocessor', bundler)
			await addCucumberPreprocessorPlugin(on, config)
			return config
		},

		baseUrl: 'https://katalon-demo-cura.herokuapp.com',
		watchForFileChanges: false,
		defaultCommandTimeout: 10000,
		pageLoadTimeout: 30000,
		requestTimeout: 10000,
		responseTimeout: 10000,
		video: false,
		retries: {
			runMode: 2,
			openMode: 2,
		},
		env: {
			URL: process.env.URL || 'https://www.qa-playtorium.com',
			TESTUSER: process.env.TESTUSER || 'John',
			TESTPWD: process.env.TESTPWD || '123',
		},
		// specPattern: '**/*.feature',
	},
})
