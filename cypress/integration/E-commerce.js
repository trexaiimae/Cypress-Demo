describe('E-commerce Testing', () => {
    it('Place an order', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        const itemsNeeded = ['Cucumber', 'Carrot', 'Beetroot', 'Brinjal'];

        // Search and add items dynamically
        itemsNeeded.forEach(item => {
            cy.get('.search-keyword').clear().type(item.slice(0, 2));
            cy.wait(1000); // wait for products to filter
            cy.get('.products .product').each(($el) => {
                const productName = $el.find('h4.product-name').text().split('-')[0].trim();
                if (productName === item) {
                    cy.wrap($el).find('button').click();
                }
            });
        });

        // Open cart and proceed to checkout
        cy.get('.cart-icon > img').click();
        cy.contains('button', 'PROCEED TO CHECKOUT').click();

        // Validate cart products
        cy.get('p.product-name').should('have.length.at.least', itemsNeeded.length)
            .then(($cartProducts) => {
                const cartItems = $cartProducts.map((i, el) => Cypress.$(el).text().split('-')[0].trim()).get();
                expect(cartItems).to.include.members(itemsNeeded);
            });

        // Validate total amount
        cy.get('table tbody tr').should('have.length.greaterThan', 0).then(($rows) => {
            let calculatedTotal = 0;
            $rows.each((index, row) => {
                const rowTotal = Number(Cypress.$(row).find('td:nth-child(5) p.amount').text());
                calculatedTotal += rowTotal;
            });

            cy.get('span.totAmt').should($displayedTotal => {
                const displayedTotal = Number($displayedTotal.text());
                expect(calculatedTotal).to.eq(displayedTotal);
            });
        });

        // Apply promo code
        cy.get('input.promocode').type('rahulshettyacademy');
        cy.get('button.promoBtn').click();
        cy.get('span.promoInfo', { timeout: 10000 })
          .should('be.visible')
          .and('have.text', 'Code applied ..!');

        // Validate discounted total
        cy.get('span.totAmt').then($total => {
            const total = Number($total.text());
            cy.get('span.discountPerc').then($perc => {
                const discountPerc = Number($perc.text().replace('%', ''));
                const expectedDiscountedTotal = total - (total * discountPerc / 100);
                cy.get('span.discountAmt').should($discounted => {
                    expect(Number($discounted.text())).to.be.closeTo(expectedDiscountedTotal, 0.01);
                });
            });
        });

        // Place order
        cy.contains('button', 'Place Order').click();

        // Select country and check terms and submit
        cy.get('select').select('Philippines');
        cy.get('input.chkAgree').check();
        cy.contains('button', 'Proceed').click();

        // Verify thank-you message
        cy.get('div.wrapperTwo span').invoke('text').then(text => {
            const actualText = text.replace(/\s+/g, ' ').trim();
            const expectedText = "Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!";
            expect(actualText).to.eq(expectedText);
        });

    });
});
