

![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Cypress <a href="https://www.cypress.io/"><img src="https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png" alt="Cypress" height="32" /></a> <a href="https://mochajs.org/"><img src="https://avatars.githubusercontent.com/u/8770005?s=400&v=4" alt="Mocha" height="32" /></a>

## Introduction

Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications. Mocha is a software tool that supports behavior-driven development (BDD).

This BrowserStack Example repository demonstrates a Cypress framework with parallel testing capabilities. The Cypress test scripts are written for the open source [BrowserStack Demo web application](https://bstackdemo.com) ([Github](https://github.com/browserstack/browserstack-demo-app)). This BrowserStack Demo App is an e-commerce web application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The Cypress tests are run on different platforms like on-prem, docker and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Cypress >= 6

    node:
    ```sh
    npm install
    ```

## About the tests in this repository

  This repository contains the following Cypress tests:


  | Module   | Spec name                          | Spec Description |
  | ------   | -------------                      | ------------- |
  | e2e      | end_to_end.spec.ts               | This scenario workflow verifies the complete and successful purchase product lifecycle steps on the e-commerce application. This scenario demonstrates the [Page Object Model design pattern](https://www.browserstack.com/guide/page-object-model-in-selenium) and is also the default spec executed in all the single spec run profiles. |
  | login    | navigate_to_signin.spec.ts          | This scenario verifies whether Sign In page is displayed after clicking on Favourites. |
  | login    | locked_user.spec.ts               | This scenario verifies the login workflow error for a locked user. |
  | offers   | offers_for_mumbai.spec.ts     | This scenario mocks the GPS location for Mumbai and verifies that the product offers applicable for the Mumbai location are shown.   |
  | product  | filter_by_vendor.spec.ts          | This scenario verifies that only Apple and Samsung products are only shown when the Apple and Samsung vendor filter option is applied. |
  | product  | sort_by_price.spec.ts   | This scenario verifies that the product prices are in ascending order when the product sort "Lowest to Highest" is applied. |
  | user     | image_not_loading.spec.ts | This scenario verifies that the product images load for user: "image_not_loading_user" on the e-commerce application. Since the images do not load, the test case assertion fails.|
  | user     | existing_orders.spec.ts |  This scenario verifies that existing orders are shown for user: "existing_orders_user"  |
  | user     | add_to_favourites.spec.ts |  This scenario verifies that we are able to add favourites for user: "existing_orders_user"  |



## Test infrastructure environments 

- [On-premise/self-hosted](#on-premise-self-hosted)
- [Docker](#docker)
- [BrowserStack](#browserstack)


## Configuring the maximum parallel test threads for this repository

  For all the parallel run configuration profiles, you can configure the maximum parallel test threads by changing the settings below.
  
  - BrowserStack
    
    In the config files in `run_conf`, we can set `"parallels" : 5`.
  
    Alternatively, we can even append a flag to the run commands: `--parallels 5`

## Test Reporting

- [Mochawesome Reports](#Generating-Videos,-Screenshots-and-Reports)

---

# On Premise / Self Hosted

This infrastructure points to running the tests on your own machine using the Cypress test runner.



## Running Your Tests

### Run a specific test on your own machine

- How to run the test?  

  - To run the default test scenario (e.g. End to End Scenario) on your own machine, use the following command:
  ``` sh
  npm run on-prem-default
  ```

  - To run a specific test scenario, use the following command with the spec file path as an argument:
  
  ```sh
  npm run on-prem "cypress/integration/<TEST_SUITE_NAME>/<SPEC_FILE_NAME>.spec.ts"
  ```

  Example:
  ```sh
  npm run on-prem "cypress/integration/user/existing_orders.spec.ts"
  ```

  where,  the argument 'TEST_SUITE_NAME' can be any Cypress suite name configured in the integrations folder and 'SPEC_FILE_NAME' can be any of the spec files in that particular suite.
  
  E.g. "Login as username", "Login as Locked User", "Offers for mumbai geo-location" or any of the other test scenario names, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

- Output

  This run profile executes a specific test scenario on a single browser instance on your own machine within the Cypress test runner.


### Run the entire test suite on your own machine

- How to run the test?

  To run the entire test suite on your own machine, use the following command:
  
  ```sh
  npm run on-prem-suite "cypress/integration/<TEST_SUITE_NAME>/**/*"
  ```

  Example:
  ```sh
  npm run on-prem-suite "cypress/integration/user/**/*"
  ```

- Output

  This run profile executes the entire test suite sequentially on a single browser, on your own machine within the Cypress test runner.

  
---

# Docker

[Docker](https://docs.docker.com/get-started/overview/) is an open source platform that provides the ability to package and test applications in an isolated environment called containers.

## Prerequisites

- Install and start [Docker](https://docs.docker.com/get-docker/).
- Note: Docker should be running on the test machine. Ensure Docker Compose is installed as well.
- Run `docker-compose pull` from the current directory of the repository.

## Running Your Tests

### Run a specific test on the docker infrastructure

- How to run the test?

  - To run the default test scenario (e.g. End to End Scenario) on docker, use the following command:
  ``` sh
  npm run docker-default
  ```


  - To run a specific test scenario, use the following command with the spec file path as an argument:

  ```sh
  spec="cypress/integration/<TEST_SUITE_NAME>/<SPEC_FILE_NAME>.spec.ts" npm run docker
  ```
  Example:
  ```sh
  spec="cypress/integration/user/existing_orders.spec.ts" npm run docker
  ```
  
  where,  the argument 'TEST_SUITE_NAME' can be any Cypress suite name configured in the integrations folder and 'SPEC_FILE_NAME' can be any of the spec files in that particular suite.
  
  E.g. "Login as username", "Login as Locked User", "Offers for mumbai geo-location" or any of the other test scenario names, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.


- Output

  This run profile executes a specific test scenario on a single browser deployed on a docker image.


### Run the entire test suite using Docker

- How to run the test?

    - To run the entire test suite on the docker image, use the following command:

  ```sh
  spec="cypress/integration/<TEST_SUITE_NAME>/**/*" npm run docker
  ```

   Example:
  ```sh
  spec="cypress/integration/user/**/*" npm run docker
  ```

- Output

  This run profile executes the entire test suite on a single browser, deployed on a docker image.

---

# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites

- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in each of the config files in the [run_conf](run_conf) folder.

Note:
- We have configured a list of test capabilities in in each of the config files in the [run_conf](run_conf) folder. You can certainly update them based on your device / browser test requirements. 
- The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/automate/capabilities)


## Running Your Tests

### Run a specific test on BrowserStack

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the [`bstack-single.json`](run_conf/bstack-single.json) file.

- How to run the test?

  - To run the default test scenario (e.g. End to End Scenario) on a single BrowserStack browser, use the following command:
  ``` sh
  npm run bstack-single-default
  ```
  
  - To run specific test scenario on a single BrowserStack browser, use the following command with the spec file path as an argument:

  ```sh
  npm run bstack-single --spec "cypress/integration/<TEST_SUITE_NAME>/<SPEC_FILE_NAME>.spec.ts"
  ```
  Example:
  ```sh
  npm run bstack-single --spec "cypress/integration/user/existing_orders.spec.ts"
  ```


  where,  the argument 'TEST_SUITE_NAME' can be any Cypress suite name configured in the integrations folder and 'SPEC_FILE_NAME' can be any of the spec files in that particular suite.
  
  E.g. "Login as username", "Login as Locked User", "Offers for mumbai geo-location" or any of the other test scenario names, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.


- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### Run the entire test suite in parallel on a single BrowserStack browser

In this section, we will run the tests in parallel on a single browser on Browserstack. To change test capabilities for this configuration, please refer to the [`bstack-single.json`](run_conf/bstack-single.json) file.

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser, use the following command:
  
  ```sh
  npm run bstack-parallel
  ```

  If you want to explicitly specifiy the number of parallel threads, then you can run it in the following way:

   ```sh
  npm run bstack-parallel --parallels 7
  ```


- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.

  - Note: By default, this execution would run maximum 5 test threads in parallel on BrowserStack. Refer to the section ["Configuring the maximum parallel test threads for this repository"](#Configuring-the-maximum-parallel-test-threads-for-this-repository) for updating the parallel thread count based on your requirements.


### Run the entire test suite in parallel on multiple BrowserStack browsers

In this section, we will run the tests in parallel on multiple browsers on Browserstack. To change test capabilities for this configuration, please refer to the [`bstack-parallel.json`](run_conf/bstack-parallel.json) file.


- How to run the test?

  To run the entire test suite in parallel on multiple BrowserStack browsers, use the following command:
  
  ```sh
  npm run bstack-parallel-browsers
  ```

### [Web application hosted on internal environment] Running your tests on BrowserStack using BrowserStackLocal

#### Prerequisites

- Clone the [BrowserStack demo application](https://github.com/browserstack/browserstack-demo-app) repository.
  ```sh
  git clone https://github.com/browserstack/browserstack-demo-app
  ``` 
- Please follow the README.md on the BrowserStack demo application repository to install and start the dev server on localhost.
- In this section, we will run a single test case to test the BrowserStack Demo app hosted on your local machine i.e. localhost. 
- Note: You may need to provide additional BrowserStackLocal arguments to successfully connect your localhost environment with BrowserStack infrastructure. (e.g if you are behind firewalls, proxy or VPN).
- Further details for successfully creating a BrowserStackLocal connection can be found here:
  
  - [Local Testing with Cypress](https://www.browserstack.com/docs/automate/cypress/local-testing)

- Before we execute the test, we need to download and start the binary as per the instructions mentioned in the link above. 


### [Web application hosted on internal environment] Run a specific test on BrowserStack using BrowserStackLocal

- How to run the test?

  - In this section, we will run the default test on a single browser on Browserstack. To change test capabilities for this configuration, please refer to [`bstack-local-single.json`](run_conf/bstack-local-single.json) file.

  - To run the default test scenario (e.g. End to End Scenario) using BrowserStackLocal, use the following command:
  ``` sh
  npm run bstack-local-default
  ```

  - To run a specific test scenario on a single BrowserStack browser using BrowserStackLocal, use the following command with the spec file path as an argument:

  ```sh
  npm run bstack-local --spec "cypress/integration/<TEST_SUITE_NAME>/<SPEC_FILE_NAME>.spec.ts"
  ```
  Example:
  ```sh
  npm run bstack-local --spec "cypress/integration/user/existing_orders.spec.ts"
  ```

  where,  the argument 'TEST_SUITE_NAME' can be any Cypress suite name configured in the integrations folder and 'SPEC_FILE_NAME' can be any of the spec files in that particular suite.

  
  E.g. "Login as username", "Login as Locked User", "Offers for mumbai geo-location" or any of the other test scenario names, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.


- Output

  This run profile executes a single test on an internally hosted web application on a single browser on BrowserStack. Please refer to your BrowserStack dashboard(https://automate.browserstack.com/) for test results.


### [Web application hosted on internal environment] Run the entire test suite in parallel on a single BrowserStack browser using BrowserStackLocal

In this section, we will run the test cases to test the internally hosted website in parallel on a single browser on Browserstack. To change test capabilities for this configuration, please refer to the [`bstack-local-single.json`](run_conf/bstack-local-single.json) file.

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser using BrowserStackLocal, use the following command:

  ```sh
  npm run bstack-local-parallel
  ```

  If you want to explicitly specifiy the number of parallel threads, then you can run it in the following way:

   ```sh
  npm run bstack-local-parallel --parallels 7
  ```


- Output

   This run profile executes the entire test suite on an internally hosted web application on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.
  
- Note: By default, this execution would run maximum 5 test threads in parallel on BrowserStack. Refer to the section ["Configuring the maximum parallel test threads for this repository"](#Configuring-the-maximum-parallel-test-threads-for-this-repository) for updating the parallel thread count based on your requirements.

### [Web application hosted on internal environment] Run the entire test suite in parallel on multiple BrowserStack browser using BrowserStackLocal

In this section, we will run the test cases to test the internally hosted website in parallel on multiple browsers on Browserstack. To change test capabilities for this configuration, please refer to the [`bstack-local-parallel.json`](run_conf/bstack-local-parallel.json)

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser using BrowserStackLocal, use the following command:

  ```sh
  npm run bstack-local-parallel-browsers
  ```

  If you want to explicitly specifiy the number of parallel threads, then you can run it in the following way:

   ```sh
  npm run bstack-local-parallel-browsers --parallels 7
  ```

- Output

  This run profile executes the entire test suite on an internally hosted web application on multiple browsers on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.

- Note: By default, this execution would run maximum 5 test threads in parallel on BrowserStack. Refer to the section ["Configuring the maximum parallel test threads for this repository"](#Configuring-the-maximum-parallel-test-threads-for-this-repository) for updating the parallel thread count based on your requirements.

## Generating Videos, Screenshots and Reports

- Whenever a test is run on-prem or on docker, Mochawesome would automate generate reports in the `cypress/report/mochawesome-report` folder. Videos would be generated and stored in `cypress/videos`. Screenshots would be generated only for the failed tests and would be stored in `cypress/screenshots`.
- When running a test on BrowserStack, such reports would be available in the `results` folder in HTML and JSON format.  


## Additional Resources

- View your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- Documentation for writing [Automate test scripts in Cypress](https://www.browserstack.com/docs/automate/cypress)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/automate/capabilities)
- [List of Browsers & mobile devices](https://www.browserstack.com/list-of-browsers-and-platforms/cypress_testing) for automation testing on BrowserStack
- [Using Automate REST API](https://www.browserstack.com/automate/rest-api) to access information about your tests via the command-line interface
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering


 ## Open Issues

 - The test `offers/offers_for_mumbai.spec.ts` does not work due to a known and recognized issue from Cypress. More information can be found [here](https://github.com/cypress-io/cypress/issues/2671).
 - Warning message `Couldn't find tsconfig.json. tsconfig-paths will be skipped` is seen because of an open issue which can be found [here](https://github.com/cypress-io/cypress/issues/9048).
