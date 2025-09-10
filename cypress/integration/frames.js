import 'cypress-iframe';

 
describe('My Second Test Suite', function() 
{
 
it('Hanlde Frames',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.wait(3000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

})
 
 
})
 
