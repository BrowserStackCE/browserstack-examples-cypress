

describe('Login as locked_user', function ()  {
  

  let user: any
  before(function () {
      cy.fixture('user').then((data) => {
          user = data
      })
  })

  it('Visit BrowserStack Demo Website', () => {

    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')

    cy.visit('/');
    cy.wait('@apiCheck');

  })
  
  it('Click on Sign In link', () => {
 	
 	  cy.intercept('GET', Cypress.config().baseUrl + '_next/static/chunks/pages/signin**').as('signinCheck')
 	  cy.get('#signin', { timeout: 30000 }).click();
    cy.wait('@signinCheck', {timeout: 30000});

  })

  it('Perform Login', function()  {

    cy.get('#username', { timeout: 30000 }).should('be.visible').click({force:true}).type(user.user1.username+'{enter}'); 
    cy.get('#password').click({force:true}).type(user.user1.password+'{enter}');
    cy.get('#login-btn').click();

  })


  it('Account has been locked', () => {

    cy.get('.api-error', { timeout: 30000 }).should('be.visible').each(elem => {
    
      cy.wrap(elem.text()).should('equal', 'Your account has been locked.');  

    });

  })

});
