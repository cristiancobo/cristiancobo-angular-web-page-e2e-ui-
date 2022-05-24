///<reference types= "cypress"/>

describe("Rappi web page", () =>{

    it("Open home page works", () =>{
        cy.visit(Cypress.env("url"));

    });

});