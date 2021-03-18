# Browserstack Examples Cypress <a href="https://www.cypress.io/"><img src="https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png" alt="Cypress" height="22" /></a> <a href="https://mochajs.org/"><img src="https://brandslogos.com/wp-content/uploads/images/large/mocha-logo.png" alt="Mocha" height="22" /></a> <a href="https://browserstack.com"><img src="https://camo.githubusercontent.com/799a5c97a4d00394703cf20a5de308784c5454c05726b4c6ba559397644e58d2/68747470733a2f2f643938623874316e6e756c6b352e636c6f756466726f6e742e6e65742f70726f64756374696f6e2f696d616765732f6c61796f75742f6c6f676f2d6865616465722e706e673f31343639303034373830" alt="Browserstack" height="22" /></a>

​
## Introduction
​
In this repository, we will demonstrate how tests can be run across different environments.
For this illustration we will be using a [demo-app](https://bstackdemo.com/).
​
## Setup
​
- Clone this repository 
​
  `git clone https://github.com/browserstack/browserstack-examples-cypress`
- Install the following dependencies
  - cypress >= 6.6.0
  - typescript >= 4.1.2
  - webpack >= 4.41.2
  - mocha >= 8.3.2
  - mochawesome >= 6.2.2
  - docker-compose >= 0.23.6
  - browserstack-cypress-cli >= 1.8.0

​
## Run your tests
​
Run your tests on the following infrastructures:
​
- [On-premise/self-hosted](#on-premise-self-hosted)
- [Docker](#docker)
- [BrowserStack](#browserstack)
​
---
​
# On Premise / Self Hosted
​
Here the test would be run in a Cypress test runner. 
​
## Prerequisites
​
- npm install
​
## Run Your Tests
​
In this part we will run the tests in different confirgurations on-premise
​
### Run Single Test On-Premise
​
In this section we will run a test on a browser on your machine in headless mode.
​
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run on-prem "cypress/integration/<NAME_OF_TEST_SUITE>/<NAME_OF_TEST>.spec.ts"
  ```
  eg: `npm run on-prem "cypress/integration/login/test4.spec.ts"`
​
- Output
​
  It will run the mentioned test. You can view the html reports along with the timestamps in the folder "cypress/report/mochawesome-report". Also, the videos would be available in "cypress/videos".
​
​
### Run Tests Suites On-Premise
​
In this section we will run the entire test suite on a browser on your machine in headless mode.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run on-prem-suite "cypress/integration/<NAME_OF_TEST_SUITE>/**/*"
  ```
​eg: `npm run on-prem-suite "cypress/integration/user/**/*"`

- Output
​
  It will run each test in the suite sequentially. You can view the html reports along with the timestamps in the folder "cypress/report/mochawesome-report". Also, the videos would be available in "cypress/videos".

  
​
---
​
# Docker
​
[Docker](https://docs.docker.com/get-started/overview/) provides the ability to run tests in containers.
​
## Prerequisites
​
- [Docker and docker-compose](https://docs.docker.com/get-docker/)
- We will be using the docker image [cypress/included](https://github.com/cypress-io/cypress-docker-images) as it contains all the operating system dependencies, the supported browsers and Cypress itself.
- Pull the docker images according to the docker-compose file or run `docker pull cypress/included`
​
## Run Your Tests
​
In this part we will run the tests in different confirgurations on docker
​
### Run Tests on Docker
​
In this section we will run a test on a browser hosted in docker
​
- How to run the test?
​
  - Run the following command to create a build and run the tests:
​
  ```sh
  npm run docker
  ```

  - After the tests are complete, you can view the html reports along with the timestamps in the folder "cypress/report/mochawesome-report". Also, the videos would be available in "cypress/videos".
​
​
- Output
​
  It will run all the tests sequentially in a docker container.
​
​
<!-- ### Run Parallel Test on Docker
​
Run the entire test suite in parallel on a single browser, deployed on a Selenium Grid docker image
​
- How to run the test?
​
  - Start the Selenium Grid first by running the following command:
​
  ```sh
  docker-compose up -d
  ```
​
  - To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  ~parallel test docker command~
  ```
​
  - After the tests are complete stop the Selenium grid by running the following command:
​
  ```sh
  docker-copmpose down
  ```
​
- Output
​
  It will run the tests in parallel in docker -->
​
​
---
​
# BrowserStack
​
 ~ Will need help from marketing here to make an effective value statement for BrowserStack
​
## Prerequisites
​
- Navigate to [BrowserStack](https://www.browserstack.com) and create an account.
- Once you login you will have to set the [BrowserStack username and access key](https://www.browserstack.com/accounts/settings)
- Go to browserstack.json file and update your credentials there.
- Export the environment variables for the Username and Access Key of your BrowserStack account.
​
- Clone the browserstack-canonical-app repository using `git clone https://github.com/browserstack/browserstack-demo-app`
- Update the [caps.json](resources/conf/caps/caps.json) file according to your device/browser needs. You can find the capabilities needed from here: [browserstack-capability-generator](https://browserstack.com/automate/capabilities)
- ~any additional lang specific setup~
​
## Run Your Tests
​
In this section we will run tests on BrowserStack infrastructure. Local tests are a part of the test suite. So we've to make sure that the local binary is up and running and "local" capability is set to "true" in browserstack.json and browserstack_single.json files.
​
### Run Single Test on Browserstack
​
In this section we will run a single the test on Chrome browser on Browserstack. To change Capabilities for this configuration refer to `single` object in `caps.json` file. Refer ['Capabilities'](https://www.browserstack.com/automate/capabilities)
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  browserstack-cypress --config-file "browserstack_single.json" --spec "<PATH_TO_TEST_FILE>" run --sync
  ```
​
- Output:
​
  It will run test on browserstack.
​
  
​
### Run Tests in parallel on single browser on Browserstack
​
In this section we will run the tests in parallel on single browser on Browserstack. To change Capabilities for this configuration refer to `single` object in `caps.json` file.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run bstack-parallel
  ```
​
- Output:
​
  It will run tests in parallel on browserstack.
​
  
### Run Tests in parallel on multiple browser on Browserstack
​
In this section we will run the tests in parallel on multiple browser on Browserstack. To change Capabilities for this configuration refer to `parallel` object in `caps.json` file.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run bstack-parallel-browsers
  ```
​
- Output
​
 It will run parallel tests on different browsers on browserstack.
​
### Run Single Test on Browserstack Local
​
In this section we will run a single testcase to test internally hosted website on Browserstack. To change Capabilities for this configuration refer to `single_local` object in `caps.json` file.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  ~bstack-local command~
  ```
​
- Output
​
  It will run a single test on a locally installed app on browserstack.
​
​
​
### Run Tests in parallel on single browser on Browserstack Local
​
In this section we will run the testcases to test internally hosted website in parallel on single browser on Browserstack. To change Capabilities for this configuration refer to `single_local` object in `caps.json` file.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run bstack-local-parallel
  ```
​
- Output
​
 It will run tests in parallel a locally installed app on browserstack.
​
​
### Run Tests in parallel on multiple browser on Browserstack Local
​
In this section we will run the testcases to test internally hosted website in parallel on multiple browser on Browserstack. To change Capabilities for this configuration refer to `parallel_local` object in `caps.json` file.
​
- How to run the test?
​
  To run the test go to your terminal or command line and paste the following command:
​
  ```sh
  npm run bstack-local-parallel-browsers
  ```
​
- Output
​
  It will run tests in parallel on multiple browsers on browserstack.
  
​
---
## Generating Reports
​
Generate Report using the following command: `~generate-reports-command~`
​
---
​
## Notes
​
We  will need help in providing the right set of references from marketing since this is a public facing app
​
- You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/java#setting-os-and-browser)
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)
​
## Addtional Resources
​
- [Documentation for writing Automate test scripts in ~lang~](~https://www.browserstack.com/automate/lang~)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/