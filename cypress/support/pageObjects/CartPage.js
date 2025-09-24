import Confirmationpage from './ConfirmationPage'


class cartPage{

    checkOutItems(){

        cy.contains('button', 'Checkout').click()
        return new Confirmationpage()
    }
    
    sumOfProduct() {
    let sum = 0
    return cy.get('tr td:nth-child(4) strong')
        .each($el => {
            // Remove everything except digits
            const amount = Number($el.text().replace(/[^\d]/g, ''))
            sum += amount
        }).then(() => {
            return sum
        })

        
}
    verifyCartTotal(){
     return this.sumOfProduct().then((sum) => {
            return cy.get('h3 strong')
                .invoke('text')
                .then((text) => {
                    const displayedTotal = Number(text.replace(/[^\d]/g, ''))
                    cy.log("Calculated sum: " + sum)
                    cy.log("Displayed total: " + displayedTotal)
                    expect(sum).to.equal(displayedTotal)
    })
})
    }



}

export default cartPage;