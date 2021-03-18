class orders{
    checkout(){
        return cy.get('#checkout-shipping-continue')
    }
    return(){
        return cy.get('.button.button--tertiary.optimizedCheckout-buttonSecondary')
    }
    orders(){
        return cy.get('#orders').click();
    }
}
export default orders
