// This script uses Page Object Model (POM) structure to automate an end-to-end test of an e-commerce website, including login, product selection, cart validation, checkout, and order confirmation.

import HomePage from '../support/pageObjects/HomePage'

describe('End to End E-commerce Test',()=>{

  before (function(){
    //runs once before all tests in the block
    cy.fixture('data').then(function(data)
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
  productPage.removeProducttoCart()
  const Confirmationpage = cartPage.checkOutItems()
  Confirmationpage.submitFormDetails()
  Confirmationpage.getAlertMessage().should('contain.text', 'Success')

 

 })
})
