describe('Login Feature', () => {

  var expected_url = Cypress.config().baseUrl + "signin?favourites=true";

  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/');
    cy.get('#favourites', { timeout: 30000 }).click();
    cy.url().should('equal', expected_url);

  })

});
