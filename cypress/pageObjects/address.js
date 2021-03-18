class address{
    firstname(){
        return cy.get('#firstNameInput')
    }
    lastname(){
        return cy.get('#lastNameInput')
    }
    addressline(){
        return cy.get('#addressLine1Input')
    }
    province(){
        return cy.get('#provinceInput')
    }
    postcode(){
        return cy.get('#postCodeInput')
    }
}
export default address
