describe('Apply Apple and Samsung Vendor Filter', () => {

  var expected_count_of_products = 16;

  it('Visit BrowserStack Demo Website', () => {

    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')
    cy.visit('/');
    cy.wait('@apiCheck');

  })

  it('Apply Apple and Samsung Vendor Filter', () => {

    cy.get('[type="checkbox"]', { timeout: 30000 }).check('Apple', { force: true });
    cy.get('[type="checkbox"]').check('Samsung', { force: true });
    cy.wait(3000);

  })

  it('Should have items based on the filtering criteria', () => {

    cy.get('.shelf-item__price', { timeout: 30000 }).should('be.visible').its('length').should('equal', expected_count_of_products);

  })

});
