describe('Apply Lowest to Highest Order By', () => {
 
  it('Visit BrowserStack Demo Website', () => {

    cy.visit('/');

  })

  it('Order by "lowest to highest"', () => {

    cy.get('.App').should('be.visible');
  	cy.get('select').select('lowestprice');
  	cy.wait(2000); 

  })

  it('Should see the prices in ascending order',  () => {


  	var prices = new Array()
       
  	cy.get('.shelf-item__price').children('.val').children('b').each(elem => {  

  		prices.push(parseInt(elem.text())); 

  	}).then(obj => {

      var prices_sort = Array.from(prices)
      prices_sort = prices_sort.sort((a,b) => a-b)
      for(let i=0;i<prices.length;i++){

        expect(prices[i]).to.be.eq(prices_sort[i])

      } 


  });



  })


});
