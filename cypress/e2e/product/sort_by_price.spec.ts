describe('Apply Lowest to Highest Order By', () => {

  it('Visit BrowserStack Demo Website', () => {

    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')
    cy.visit('/');
    cy.wait('@apiCheck');

    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheckagain')
    cy.get('select', { timeout: 30000 }).select('lowestprice');
    cy.wait('@apiCheckagain');

    var prices = new Array()
    cy.get('.shelf-item__price', { timeout: 30000 }).children('.val').children('b').each(elem => {
      prices.push(parseInt(elem.text()));
    }).then(obj => {

      var prices_sort = Array.from(prices)
      prices_sort = prices_sort.sort((a, b) => a - b)
      for (let i = 0; i < prices.length; i++) {
        expect(prices[i]).to.be.eq(prices_sort[i])
      }
    });
  })

});
