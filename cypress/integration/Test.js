describe ('My First Test', () => {
    it('My First test case',()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);

    //parent child chaining
    cy.get('.products').find('.product').should('have.length',4);
    
})
})
