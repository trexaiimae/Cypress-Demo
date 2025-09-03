describe ('Handling Web Controls', () => {
    it('Web controls test',()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // check multiple checkboxes
    cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked');
 
    // static dropdown
    // cy.get('[name="dropdown-class-example"]').select('option2').should('have.value','option2')
    cy.get('select').select('option2').should('have.value','option2');

    //dynamic dropdown
    cy.get('#autocomplete').type('Ind');
    cy.get('.ui-menu-item div').each(($el) => {
    if ($el.text() === 'India') {
    cy.wrap($el).click()
  }
})

cy.get('#autocomplete').should('have.value','India');

cy.get('#displayed-text').should('be.visible');
cy.get('#hide-textbox').click();
cy.get('#displayed-text').should('not.be.visible');
cy.get('#show-textbox').click();
cy.get('#displayed-text').should('be.visible');

//radio button
// cy.get('[for="radio2"] > [name="radioButton"]').click().should('be.checked')
cy.get('input[value="radio2"]').check().should('be.checked');

 
    


   



















})


})
