import Login from '../../pageObjects/login'
import Purchase from '../../pageObjects/purchase'
import Signin from '../../pageObjects/signin'
import Address from '../../pageObjects/address'
import Orders from '../../pageObjects/orders'



describe('End to End Scenario', function()  {
   
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

    cy.visit('/');

  })

  it('Click on Sign In link', () => {
  
    signin.load().should('be.visible')
    signin.signinButton().click();

  })

  it('Perform Login', function()  {

    login.username().should('be.visible').click({force:true}).type(user.user4.username +'{enter}'); 
    login.password().click({force:true}).type(user.user4.password +'{enter}');
    login.logInButton().click();

  })

  it('Add three products to cart', () => {

    purchase.item1().click({force:true});
    purchase.item2().click({force:true});
    purchase.item3().click({force:true});
  
  })

  it('Click on buy button', () => {

    purchase.buyButton().click({force:true});

  })

  it('Update address details', () => {

 	  address.firstname().should('be.visible').type('first');
    address.lastname().type('last');
    address.addressline().type('test address');
    address.province().type('test province');
    address.postcode().type('123456');
  
  })

  it('Make purchase and checkout', () => {

    orders.checkout().click();

  })

  it('Go to Orders', () => {

    orders.return().click();
    orders.orders().click();

  })

  it('Should see elements in the list', () => {

    cy.get('.a-fixed-right-grid-inner.a-grid-vertical-align.a-grid-top').should('be.visible').its('length').should('equal', 3);

  })


});
