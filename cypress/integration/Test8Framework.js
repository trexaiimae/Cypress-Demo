describe('End to End E-commerce Test',()=>
{
 
    it('Submit an order',()=>{
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
       
  cy.visit("https://rahulshettyacademy.com/loginpagePractise/")

    cy.get("p.text-center").then(($el) => {
      const text = $el.text()
      cy.log("Full text: " + text)

    // Use the extracted username and password to fill in the login form
      const username = text.match(/username is (\w+)/i)[1]
      const password = text.match(/Password is (\w+)/i)[1]

      cy.log("Username: " + username)
      cy.log("Password: " + password)

    // Fill in the login form and submit
      cy.get('#username').type(username)
      cy.get('#password').type(password)
      cy.get('span.checkmark').eq(1).click()
      //error here because of actions
      cy.get('#signInBtn').click()
 
    })
 
 })
})
