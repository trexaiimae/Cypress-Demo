import HomePage from '../support/pageObjects/HomePage'

describe('End to End E-commerce Test',()=>{

  before (function(){
    //runs once before all tests in the block
    cy.fixture('example').then(function(data)
{
  this.data=data
  this.homepage = new HomePage()
})
})
 
  it('Submit an order',function(){

  const productName= this.data.productName

  cy.visit(Cypress.env('url')+"/loginpagePractise/")
  const productPage = this.homepage.login(this.data.username,this.data.password)
  productPage.pageValidation()
  productPage.getCartCount().should('have.length', 4)
  productPage.selectProduct(productName)
  productPage.selectFirstProduct()
  const cartPage= productPage.goToCart()

  cartPage.sumOfProduct().then(function(sum)
  {
   expect(sum).to.be.lessThan(200000);
  })

  const Confirmationpage = cartPage.checkOutItems()
  Confirmationpage.submitFormDetails()
  Confirmationpage.getAlertMessage().should('contain.text', 'Success')

 

 })
})
