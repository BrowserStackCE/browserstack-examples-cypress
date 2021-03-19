class login{
    username(){
        return cy.get('#username', { timeout: 30000 })
    }
    password(){
        return cy.get('#password', { timeout: 30000 })
    }
    logInButton(){
        return cy.get('#login-btn', { timeout: 30000 })
    }
}
export default login
