describe ('My First Test', () => {
    it('My First test case',()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visbile').should('have.length',4);

})
})
