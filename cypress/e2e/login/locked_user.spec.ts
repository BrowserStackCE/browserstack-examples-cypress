describe('Login as locked_user', function () {

  let user: any
  before(function () {
    cy.fixture('user').then((data) => {
      user = data
    })
    cy.visit('/');
  })

  it('Visit BrowserStack Demo Website', () => {

    cy.get('#signin', { timeout: 30000 }).click();
    cy.get('#username', { timeout: 30000 }).should('be.visible').click({ force: true }).type(user.user1.username + '{enter}');
    cy.get('#password').click({ force: true }).type(user.user1.password + '{enter}');
    cy.get('#login-btn').click();
    cy.get('.api-error', { timeout: 30000 }).should('be.visible').each(elem => {
      cy.wrap(elem.text()).should('equal', 'Your account has been locked.');
    });

  })

});
