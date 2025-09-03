describe ('Handling Web Tables', () => {
    it('Web Tables Scenario',()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const text = $el.text();

      if (text.includes('Python'))
      {
       cy.get('tr td:nth-child(2)').eq(index).should('have.text','Master Selenium Automation in simple Python Language');
       cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) //move to next sibling
        {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        }
     ) }
      
      

    })
 














})


})
