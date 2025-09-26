// <reference types="Cypress" />

describe('Dog API Test', function() {

    it('Validate dog breeds list', function() {

        cy.request('GET', 'https://dog.ceo/api/breeds/list/all').then((response) => {
            
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body.message).to.be.an('object');

           // To check if these specicific breeds exist in the response array
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

});
