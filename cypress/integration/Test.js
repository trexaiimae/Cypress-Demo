describe ('My First Test', () => {
    it('My First test case',()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);

    //Alliasing a locator same as const variable
    cy.get('.products').as('productLocator')

    //parent child chaining
    cy.get('@productLocator').find('.product').should('have.length',4);
    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click() //ideal way to use by index
    console.log('test')

    // Add dynamically base on product name
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg=  $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews'))
        
    {
        cy.wrap($el.find('button').click());
    }
})
//assert if text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//Print logo text
cy.get('.brand').then(function(logoElement){
    cy.log(logoElement.text())
})













})

})



