// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { Chance } from "chance";
import {makeLogger} from "ts-loader/dist/logger";

const chance = new Chance();
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      // getBySel: typeof getBySel;
      // fillBasic: typeof fillBasic;
      // fillContact: typeof fillContact;
      // fillAddress: typeof fillAddress;
      // fillId: typeof fillId;
      // fillEmployer: typeof fillEmployer;
      // fillProduct: typeof fillProduct;
      // fillDemographicPage: typeof fillDemographicPage;
      // fillIdPage: typeof fillIdPage;
      // fillProductPage: typeof fillProductPage;
      // skipDuplicateCheck: typeof skipDuplicateCheck;
      google(): Chainable<Window>
      navigate(pageName: string): void
    }
  }
}
/**
 * Goes to google site
 */

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add("navigate", pageName => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`)
})

// Convert this to a module instead of script (allows import/export)
export {}
// const getBySel = (selector, ...args) => {
//   return cy.get(`[data-test=${selector}]`, ...args);
// };
// // @ts-ignore
// Cypress.Commands.add("getBySel", getBySel);
//
// //fill basic info
// const fillBasic = applicant => {
//   cy.getBySel("fName").type(
//     applicant.firstName || Chance().first({ nationality: "en" }),
//   );
//   cy.getBySel("lName").type(applicant.lastName || Chance().last({ nationality: "en" }));
//   cy.getBySel("ssn").type(applicant.ssn || Chance().ssn({ dashes: false }));
//   cy.getBySel("citizenshipStatus")
//     .click()
//     .get("mat-option")
//     .contains(applicant.citizenship || "US citizen")
//     .click();
//   const dob = Cypress.moment()
//     .add(-30, "year")
//     .add(1, "month")
//     .add(1, "day")
//     .format("MM/DD/YYYY"); // adjust format to suit the apps requirements
//
//   cy.getBySel("dob").type(`${dob}`);
// };
// Cypress.Commands.add("fillBasic", fillBasic);
//
// //fill contac
// const fillContact = applicant => {
//   cy.get("#contactDesktop")
//     .find(`[formcontrolname=email]`)
//     .type(applicant.email || Chance().email({ domain: "rbfcu.org" }));
//
//   cy.get("#contactDesktop")
//     .find(`[formcontrolname=cellPhone]`)
//     .type(
//       applicant.cell ||
//       Chance().phone({ country: "us", mobile: true, formatted: false }),
//     );
// };
// Cypress.Commands.add("fillContact", fillContact);
//
// //fill address
// const fillAddress = applicant => {
//   cy.getBySel("addressLine1").type(applicant.address.line1 || Chance().address());
//   cy.getBySel("addressLine2").type(
//     applicant.address.line2 ||
//     Chance()
//       .integer({ min: 100, max: 200 })
//       .toString(),
//   );
//   cy.getBySel("city").type(applicant.address.city || Chance().city());
//   cy.getBySel("state")
//     .click()
//     .get("mat-option")
//     .contains(
//       applicant.address.state || Chance().state({ country: "us", full: true }),
//     )
//     .click();
//   cy.getBySel("zipCode").type(applicant.address.zip || Chance().zip());
// };
// Cypress.Commands.add("fillAddress", fillAddress);
//
// //fill id
// const fillId = (applicant: { id: { idNumber: any; issuingState: any; }; }) => {
//   cy.getBySel("issueDate").type(
//     Cypress.moment()
//       .add(-1, "year")
//       .add(1, "month")
//       .add(1, "day")
//       .format("MM/DD/YYYY"),
//   );
//   cy.getBySel("expDate").type(
//     Cypress.moment()
//       .add(2, "year")
//       .add(1, "month")
//       .add(1, "day")
//       .format("MM/DD/YYYY"),
//   );
//
//   cy.getBySel("idNumber").type(
//     applicant.id.idNumber ||
//     Chance()
//       .integer({ min: 10000, max: 20000 })
//       .toString(),
//   );
//   cy.getBySel("state")
//     .click()
//     .get("mat-option")
//     .contains(
//       applicant.id.issuingState || Chance().state({ country: "us", full: true }),
//     )
//     .click();
// };
// Cypress.Commands.add("fillId", fillId);
//
// //fill employer
// const fillEmployer = applicant => {
//   // //fill employer
//   cy.getBySel("employment")
//     .click()
//     .get("mat-option")
//     .contains(applicant.employment.employmentStatus || "Active Military")
//     .click();
// };
// Cypress.Commands.add("fillEmployer", fillEmployer);
//
// //fill product
// const fillProduct = applicant => {
//   cy.getBySel("cPay")
//     .find("input:visible")
//     .first()
//     .check({ force: true });
//
//   cy.getBySel("isTaxInfoChecked")
//     .find("input:visible")
//     .first()
//     .check({ force: true });
//
//   cy.getBySel("isDisclosureChecked")
//     .find("input:visible")
//     .first()
//     .check({ force: true });
// };
// Cypress.Commands.add("fillProduct", fillProduct);
//
// //fill demographic step
// const fillDemographicPage = (isJoint: boolean = false) => {
//   cy.fixture("applicants").then(data => {
//     const applicant = data.applicants.find(
//       applicant => applicant.applicantType == "PRIMARY",
//     );
//     cy.fillBasic(applicant);
//     cy.fillContact(applicant);
//     cy.fillAddress(applicant);
//   });
// };
// Cypress.Commands.add("fillDemographicPage", fillDemographicPage);
//
// const fillIdPage = () => {
//   cy.fixture("applicants").then(data => {
//     const applicant = data.applicants.find(
//       applicant => applicant.applicantType == "PRIMARY",
//     );
//     cy.fillId(applicant);
//     cy.fillEmployer(applicant);
//   });
// };
// Cypress.Commands.add("fillIdPage", fillIdPage);
//
// const fillProductPage = () => {
//   cy.fixture("applicants").then(data => {
//     const applicant = data.applicants.find(
//       applicant => applicant.applicantType == "PRIMARY",
//     );
//     cy.fillProduct(applicant);
//   });
// };
// Cypress.Commands.add("fillProductPage", fillProductPage);
//
// const skipDuplicateCheck = () => {
//   cy.route({
//     method: "POST",
//     url: "**/eligibility",
//     response: { eligible: true },
//   });
// };
// Cypress.Commands.add("skipDuplicateCheck", skipDuplicateCheck);

// Cypress.Commands.add('mockGeolocation', (latitude = 19, longitude = 73) => {
//   cy.window().then(($window) =>  {
//     cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
//          return callback({ coords: { latitude, longitude } });
//     });
//   });
// });

