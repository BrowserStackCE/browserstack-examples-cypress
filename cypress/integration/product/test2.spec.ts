describe('Apply Apple and Samsung Vendor Filter', () => {

  var no_of_items = 16;
 
  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/');

  })
  
  it('Apply Apple and Samsung Vendor Filter', () => {

    cy.get('.App').should('be.visible');
 	  cy.get('[type="checkbox"]').check('Apple', {force:true});
    cy.get('[type="checkbox"]').check('Samsung', {force:true});
    cy.wait(3000);

  })

  it('Should have items based on the filtering criteria', () => {

	  cy.get('.shelf-item__price').should('be.visible').its('length').should('equal', no_of_items);

  })

});
