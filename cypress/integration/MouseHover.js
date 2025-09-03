describe ('Handling Web Tables', () => {
    it('Web Tables Scenario',()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force:true}) //use only when not necessary to show the hover elements and just click on the element directly
    cy.url().should('include','top')













})


})
