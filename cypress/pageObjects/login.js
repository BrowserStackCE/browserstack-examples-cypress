class login{
    username(){
        return cy.get('#username', { timeout: 10000 })
    }
    password(){
        return cy.get('#password', { timeout: 10000 })
    }
    logInButton(){
        return cy.get('#login-btn', { timeout: 10000 })
    }
}
export default login
