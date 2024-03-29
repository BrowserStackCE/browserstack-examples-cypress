import Login from '../../pageObjects/login'
import Purchase from '../../pageObjects/purchase'
import Signin from '../../pageObjects/signin'
import Address from '../../pageObjects/address'
import Orders from '../../pageObjects/orders'

describe('End to End Scenario', function () {

  const login = new Login();
  const purchase = new Purchase();
  const signin = new Signin();
  const address = new Address();
  const orders = new Orders();

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
    signin.signinButton().click();
    cy.wait('@signinCheck', { timeout: 30000 });

    login.username().should('be.visible').click({ force: true }).type(user.user4.username + '{enter}');
    login.password().click({ force: true }).type(user.user4.password + '{enter}');
    login.logInButton().click();

    purchase.item1().click({ force: true });
    purchase.item2().click({ force: true });
    purchase.item3().click({ force: true });

    purchase.buyButton().click({ force: true });

    address.firstname().should('be.visible').type('first');
    address.lastname().type('last');
    address.addressline().type('test address');
    address.province().type('test province');
    address.postcode().type('123456');

    orders.checkout().click();

    orders.return().click();
    cy.wait(3000);
    orders.orders().click();

    cy.get('.a-fixed-right-grid-inner.a-grid-vertical-align.a-grid-top', { "timeout": 30000 }).should('be.visible').its('length').should('equal', 3);

  })

});
