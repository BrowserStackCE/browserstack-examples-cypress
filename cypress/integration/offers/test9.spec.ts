

describe('Offers for Mumbai geo-location', () => {

  let user: any
  before(function () {
      cy.fixture('user').then((data) => {
          user = data
      })
  })

  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/', {
      onBeforeLoad (win) {
        const latitude = 19.07;
        const longitude = 72.87;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });

  })

  it('Click on Offers', () => {
  
    cy.get('#offers').click();

  })

  it('Type fav_user in "username" ', () => {
  
    cy.get('#username', { timeout: 10000 }).should('be.visible').click({force:true}).type(user.user4.username +'{enter}');

  })

  it('Type testingisfun99 in "password" ', () => {

    cy.get('#password', { timeout: 10000 }).click({force:true}).type(user.user4.password +'{enter}');

  })

  it('Press Log In button', () => {
  
    cy.get('#login-btn', { timeout: 10000 }).click();
    cy.wait(2000);

  })


});
