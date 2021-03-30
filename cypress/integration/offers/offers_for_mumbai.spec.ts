describe('Offers for Mumbai geo-location', () => {

    let user: any
    before(function () {
        cy.fixture('user').then((data) => {
            user = data
        })
    })

    it('Visit BrowserStack Demo Website', () => {

        cy.visit('/', {
            onBeforeLoad(win) {
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

    it('Perform Login', () => {

        cy.intercept('POST', Cypress.config().baseUrl + 'api/signin').as('signin')
        cy.get('#username', { timeout: 30000 }).should('be.visible').click({ force: true }).type(user.user4.username + '{enter}');
        cy.get('#password', { timeout: 30000 }).click({ force: true }).type(user.user4.password + '{enter}');
        cy.get('#login-btn', { timeout: 30000 }).click();
        cy.wait('@signin', { timeout: 30000 });

    })

    it('Check Offers available or not', () => {

        cy.get('.shelf-item__price', { timeout: 5000 }).should('be.visible');
        Cypress.log({
            name: 'Known Cypress issue',
            message: 'Link to the issue: https://github.com/cypress-io/cypress/issues/2671'
        }) // this should fail

    })


});
