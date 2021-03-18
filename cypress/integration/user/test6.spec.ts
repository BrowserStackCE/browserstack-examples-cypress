

describe('Login as User with existing Orders', function()  {

  

  let user: any
  before(function () {
      cy.fixture('user').then((data) => {
          user = data
      })
  })
 
  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/');

  })

  it('Click on Sign In link', () => {

 	  cy.get('.App').should('be.visible')
 	  cy.get('#signin').click();

  })

  it('Perform Login', function()  {

    cy.get('#username', { timeout: 10000 }).should('be.visible').click({force:true}).type(user.user3.username +'{enter}'); 
    cy.get('#password', { timeout: 10000 }).click({force:true}).type(user.user3.password +'{enter}');
    cy.get('#login-btn', { timeout: 10000 }).click();

  })

   it('Click on "Orders" link', () => {

 	  cy.get('#orders').should('be.visible').click();

  })

   it('Should see elements in the list', () => {
 	
 	  cy.get('.a-box-group.a-spacing-base.order').should('be.visible').its('length').should('be.gt', 0);

  })

});
