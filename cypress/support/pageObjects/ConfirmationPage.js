class Confirmationpage {


submitFormDetails() {

    cy.submitFormDetails()
// cy.get('#country').type('India')
// Cypress.config('defaultCommandTimeout',8000) //Set timeout to 8 sec
// cy.get('.suggestions ul li a').click()
// cy.get('.btn-success').click()

}

getAlertMessage(){

    return cy.get('.alert-success')

}

}
export default Confirmationpage;