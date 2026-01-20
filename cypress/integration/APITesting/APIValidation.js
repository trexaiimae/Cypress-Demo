// <reference types="Cypress" />

describe('Dog API Test', function() {

    it('Positive Scenarios', function() {

        cy.request('GET', 'https://dog.ceo/api/breeds/list/all').then((response) => {
            
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body.message).to.be.an('object');

            // To check if these specific breeds exist in the response object
            expect(response.body.message).to.have.property('akita');
            expect(response.body.message).to.have.property('bulldog');
            expect(response.body.message).to.have.property('retriever');

            // Validate bulldog and retriever sub-breed
            expect(response.body.message.bulldog).to.include.members(['boston', 'english', 'french']);
            expect(response.body.message.retriever).to.include.members(['chesapeake', 'golden']);

            // Test Validation for a breed that has no sub-breed
            expect(response.body.message.beagle).to.be.an('array').that.is.empty;
        });
    });

    it('Negative Scenarios', function() {

        // Invalid endpoint
        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/invalid',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.status).to.eq('error');
            expect(response.body.message).to.contain('No route found');
            
        });

        // Non-existing breed
        cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breed/dragon/images',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.status).to.eq('error');
            expect(response.body.message).to.contain('Breed not found');
        });

//testingcicd
    });

});
