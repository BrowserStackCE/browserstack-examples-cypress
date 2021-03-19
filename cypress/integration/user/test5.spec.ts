

describe('Login as User with no image loaded', function() {

  

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

  it('Perform Login', function() {

    cy.get('#username', { timeout: 30000 }).should('be.visible').click({force:true}).type(user.user2.username +'{enter}'); 
    cy.get('#password', { timeout: 30000 }).click({force:true}).type(user.user2.password +'{enter}');
    cy.get('#login-btn', { timeout: 30000 }).click();

  })

  it('Should see no image loaded', () => {

    cy.get('.shelf-item__thumb', { timeout: 30000 }).should('be.visible').children('img[src=""]').its('length').should('equal', 0);

  })


});

