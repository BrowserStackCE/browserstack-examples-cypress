import org.jenkinsci.plugins.pipeline.modeldefinition.Utils

node {
	try {
		skipDefaultCheckout(true)

		properties([
			parameters([
				credentials(credentialType: 'com.browserstack.automate.ci.jenkins.BrowserStackCredentials', defaultValue: '', description: 'Select your BrowserStack Username', name: 'BROWSERSTACK_USERNAME', required: true),
				[$class: 'ExtensibleChoiceParameterDefinition',
				choiceListProvider: [
					$class: 'TextareaChoiceListProvider',
					addEditedValue: false,
					choiceListText: '''bstack-single
bstack-parallel
bstack-parallel-browsers
bstack-local
bstack-local-parallel
bstack-local-parallel-browsers''',
					defaultChoice: 'bstack-parallel'
				],
				description: 'Select the test you would like to run',
				editable: false,
				name: 'TEST_TYPE']
			])
		])

		stage('Setup') {
			cleanWs()
			// We need to explicitly checkout from SCM here
			checkout scm
		}

		stage('Pull from Github') {
			dir('test') {
				git branch: 'main', changelog: false, poll: false, url: 'https://github.com/browserstack/browserstack-examples-cypress.git'
			}
		}

		stage('Install Dependencies'){
			sh '''
				cd test
				npm install
				npm upgrade browserstack-cypress-cli
			'''
		}

		stage('Run Test(s)') {
			browserstack(credentialsId: "${params.BROWSERSTACK_USERNAME}") {
				sh returnStatus:true,script: '''
					cd test
					npm run ${TEST_TYPE}
				'''
			}
		}
	} catch (e) {
		currentBuild.result = 'FAILURE'
		throw e
	}
}

