

describe('Login as locked_user', function ()  {

  

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

    cy.get('#username', { timeout: 10000 }).should('be.visible').click({force:true}).type(user.user1.username+'{enter}'); 
    cy.get('#password', { timeout: 10000 }).click({force:true}).type(user.user1.password+'{enter}');
    cy.get('#login-btn', { timeout: 10000 }).click();

  })


  it('Account has been locked', () => {

    cy.get('.api-error').should('be.visible').each(elem => {
    
      cy.wrap(elem.text()).should('equal', 'Your account has been locked.');  

    });

  })

});
