class orders{
    checkout(){
        return cy.get('#checkout-shipping-continue', { timeout: 30000 })
    }
    return(){
        return cy.get('.button.button--tertiary.optimizedCheckout-buttonSecondary', { timeout: 30000 })
    }
    orders(){
        return cy.get('#orders', { timeout: 30000 }).click();
    }
}
export default orders
