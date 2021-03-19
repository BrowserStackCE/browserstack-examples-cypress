class purchase{
    item1(){
        return cy.get('#1', { timeout: 30000 }).should('be.visible').children('.shelf-item__buy-btn')
    }
    item2(){
        return cy.get('#2').children('.shelf-item__buy-btn')
    }
    item3(){
        return cy.get('#5').children('.shelf-item__buy-btn')
    }
    buyButton(){
        return cy.get('.buy-btn')
    }
}
export default purchase