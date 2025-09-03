describe ('E commerce Testing', () => {
    it('Place an order',()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products').as('productLocator');
   
    // Add dynamically base on product name
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg=  $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews'))
        
    {
        cy.wrap($el.find('button').click()); // use wrap if .click in depricated
    }
})
 cy.get('.cart-icon > img').click();
 cy.contains('button','PROCEED TO CHECKOUT').click(); // locate by text
 cy.contains('button', 'Place Order').click();

























})

})



