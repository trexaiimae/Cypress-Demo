describe('End to End E-commerce Test',()=>
{
 
    it('Submit an order',()=>{
  cy.visit("https://rahulshettyacademy.com/loginpagePractise/");

  const productName= "Nokia Edge"
       
  cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
  cy.get('#username').type("rahulshettyacademy")
  cy.get('#password').type("learning")
  cy.contains('Sign In').click()
  cy.contains('Shop Name').should('be.visible')
  cy.get('app-card').should('have.length', 4)
  cy.get('app-card').filter(`:contains("${productName}")`)
  .then($element => 
    {
      cy.wrap($element).should('have.length', 1)
      cy.wrap($element).contains('button', 'Add').click()
    }
  )
cy.get('app-card').eq(0).contains('button', 'Add').click()
cy.contains('a' , 'Checkout').click()

//assert that total cart amount should not exceed 2k
let sum= 0
cy.get('tr td:nth-child(4) strong')
.each($el=>{

  const amount =Number($el.text().split(" ")[1].trim())
  sum= sum + amount
}).then(() =>{

  expect(sum).to.be.lessThan(200000);
});
cy.contains('button', 'Checkout').click()
cy.get('#country').type('India')
cy.wait(6000)
cy.get('.suggestions ul li a').click()
cy.get('.btn-success').click()
cy.get('.alert-success').should('contain','Success' )


 

 })
})
