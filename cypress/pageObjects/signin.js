class signin{

    signinButton(){
        return cy.get('#signin', { timeout: 30000 })
    }
    
}
export default signin
