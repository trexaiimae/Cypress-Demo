import ProductPage from './ProductPage'

class HomePage {
  goTo(url) {
    cy.visit(url)
  }

  login(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get(':nth-child(2) > .checkmark').click()
    cy.wait(1000);
    cy.get('#okayBtn').click()
    cy.get('#terms').click()
    cy.get('select.form-control').select('Consultant') // select by visible text
    cy.contains('Sign In').click()

    return new ProductPage()
  }
}

export default HomePage
