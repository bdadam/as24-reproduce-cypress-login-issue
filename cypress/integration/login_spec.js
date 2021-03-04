describe("Login Functionality", function () {
  it("Check if user can login successfully", function () {
    cy.visit("http://www.autoscout24.de/#disable-cmp=true");

    // give login credentials

    cy.get("#new-btn-login").click();

    cy.get('[id="Username"]').type("testuser.cypress@as24.de");

    cy.get('[id="Password"]').type("As24Cypress");

    cy.get("#login-button").click();

    //verifiy url

    cy.wait(200);

    cy.url().should("include", "/accounts");
  });
});
