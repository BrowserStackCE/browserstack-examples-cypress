class signin{
    load(){
        return cy.get('.App', { timeout: 10000 })
    }
    signinButton(){
        return cy.get('#signin', { timeout: 10000 })
    }
}
export default signin
