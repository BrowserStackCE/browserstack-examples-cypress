import org.jenkinsci.plugins.pipeline.modeldefinition.Utils

node {
	try {
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

		stage('Pull from Github') {
			dir('test') {
				git branch: 'main', changelog: false, poll: false, url: 'https://github.com/browserstack/browserstack-examples-cypress.git'
			}
		}

		stage('Start Local') {
			if ( "${params.TEST_TYPE}".contains('local') ) {
				dir('app') {
					git branch: 'master', url: 'https://github.com/browserstack/browserstack-demo-app'
					sh '''
						npm install
						npm run build
						npm start &
					'''
				}
			} else {
				Utils.markStageSkippedForConditional('Start Local')
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

		stage('Stop Local') {
			if ( "${params.TEST_TYPE}".contains('local') ) {
				sh '''
					ps -ax | grep npm | grep -v grep | awk '{ print $1 }' | xargs kill -9
				'''
			} else {
				Utils.markStageSkippedForConditional('Start Local')
			}
		}
	} catch (e) {
		currentBuild.result = 'FAILURE'
		throw e
	}
}

