describe('Login as User with existing Orders', function () {

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

    cy.intercept('GET', Cypress.config().baseUrl + '_next/static/chunks/pages/signin**').as('signinCheck')
    cy.get('#signin', { timeout: 30000 }).click();
    cy.wait('@signinCheck', { timeout: 30000 });

    cy.get('#username', { timeout: 30000 }).should('be.visible').click({ force: true }).type(user.user3.username + '{enter}');
    cy.get('#password', { timeout: 30000 }).click({ force: true }).type(user.user3.password + '{enter}');
    cy.get('#login-btn', { timeout: 30000 }).click();

    cy.get('#4', { timeout: 30000 }).should('be.visible').children('.shelf-stopper').children('button').click({ force: true });
    cy.get('#5').children('.shelf-stopper').children('button').click({ force: true });

    cy.get('#favourites', { timeout: 30000 }).click();
    cy.get('.shelf-item', { timeout: 30000 }).should('be.visible').its('length').should('be.gt', 0);

  })

});
