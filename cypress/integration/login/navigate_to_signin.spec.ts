describe('Login Feature', () => {

  var expected_url = Cypress.config().baseUrl + "signin?favourites=true";

  it('Visit BrowserStack Demo Website', () => {

    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')
    cy.visit('/');
    cy.wait('@apiCheck');

  })
  it('Go to Favourites', () => {

    cy.get('#favourites', { timeout: 30000 }).click();

  })

  it('Navigated to Sign In page', () => {

    cy.intercept('GET', Cypress.config().baseUrl + '_next/static/chunks/pages/signin**').as('signinCheck')
    cy.wait('@signinCheck', { timeout: 30000 });
    cy.url().should('equal', expected_url);

  })

});
