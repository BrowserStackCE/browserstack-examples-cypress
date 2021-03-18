describe('Login Feature', () => {
 
  var url = Cypress.config().baseUrl + "signin?favourites=true";

  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/');

  })
  it('Go to Favourites', () => {
  	
    cy.get('.App').should('be.visible')
    cy.get('#favourites').click();

  })

  it('Navigated to Sign In page', () => {
 	
    cy.get('#login-btn').should('be.visible');
 	  cy.url().should('equal', url);

  })

});
