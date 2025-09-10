describe ('Handling Web Controls', () => {
    it('Web controls test',()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    cy.on('window:alert',(str)=> // get the string found in the alert internally
    {
        //mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
    })

    cy.on('window:confirm',(str)=>
    {

        expect(str).to.equal('Hello , Are you sure you want to confirm?');
    })


     // Handle Child Window
    cy.get('#opentab').invoke('prop', 'href').then((newlink) => //dynammically get the link of the new tab
      {
        cy.visit(newlink);      // open it in the same tab
        cy.origin(new URL(newlink).origin, () => { // pass the origin domain only (not full URL)
          cy.get('#navbarSupportedContent a[href="about.html"]').click();
          cy.get('.mt-50 h2').should('contain.text', 'Welcome to QAClick Academy'); //assertion
        });
      });



    //other way 1
    // cy.get('#opentab').invoke('removeAttr','target').click(); // to open in same tab
    // cy.origin('https://www.qaclickacademy.com/',()=>
    // {
    //    cy.get('#navbarSupportedContent a[href="about.html"]').click();
    // })

    
 
















})


})
