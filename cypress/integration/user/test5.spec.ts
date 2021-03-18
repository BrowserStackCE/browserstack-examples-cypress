

describe('Login as User with no image loaded', function() {

  

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

  it('Perform Login', function() {

    cy.get('#username', { timeout: 10000 }).should('be.visible').click({force:true}).type(user.user2.username +'{enter}'); 
    cy.get('#password', { timeout: 10000 }).click({force:true}).type(user.user2.password +'{enter}');
    cy.get('#login-btn', { timeout: 10000 }).click();

  })

  it('Should see no image loaded', () => {

    cy.get('.shelf-item__thumb').should('be.visible').children('img[src=""]').its('length').should('equal', 0);

  })


});

