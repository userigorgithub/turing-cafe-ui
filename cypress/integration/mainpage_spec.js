describe('Turing cafe main page', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: "reservations.json"})

    cy.visit("http://localhost:3000/")
  });

  // it('should be able to visit the main page by accessing `http://localhost:3000`', () => {
  //   cy.url('http://localhost:3000')
  // });

  it('should be able to visit the main page and see title and form', () => {
    cy.get("h1")
    .should("contain", 'Turing Cafe Reservations')

    cy.get("input")
      .should("have.length", 4)

    cy.get("input").eq(0)
      .should("have.attr", "placeholder").should("contain", "Name")
    cy.get("input").eq(1)
      .should("have.attr", "placeholder").should("contain", "Date (mm/dd)")
    cy.get("input").eq(2)
      .should("have.attr", "placeholder").should("contain", "Time")
    cy.get("input").eq(3)
      .should("have.attr", "placeholder").should("contain", "Num of guests")

    cy.get("button")
      .should("contain", "Make Reservation")
  });

  // it('should have a reservation form', () => {
  //   cy.get('.res-form').get('.name').get('.date').get('.time').get('.number').get('.make-res-button')
  // });

  it("should be able to view current reservations", () => {
    cy.get(".resy")
      .should("have.length", 3)
        .first()
          .should("contain", "Christie")
          .should("contain", "12/29")
          .should("contain", "7:00")
          .should("contain", "Number of guests: 12")
  });

  it("should be able to type into each form", () => {
    cy.get("input").eq(0)
      .type("Robert")
      .should("have.value", "Robert")
    cy.get("input").eq(1)
      .type("1/21")
      .should("have.value", "1/21")
    cy.get("input").eq(2)
      .type("6:00")
      .should("have.value", "6:00")
    cy.get("input").eq(3)
      .type("4")
      .should("have.value", "4")
  });

  it("Should let user make a reservation", () => {
    cy.get("input").eq(0)
      .type("Robert")
      .should("have.value", "Robert")
    cy.get("input").eq(1)
      .type("1/21")
      .should("have.value", "1/21")
    cy.get("input").eq(2)
      .type("6:00")
      .should("have.value", "6:00")
    cy.get("input").eq(3)
      .type("4")
      .should("have.value", "4")

    cy.get(".submit").click()

    cy.get(".resy").should("have.length", 4)
      .eq(3)
        .should("contain", "Robert")
        .should("contain", "1/21")
        .should("contain", "6:00")
        .should("contain", "Number of guests: 4")
  });

  // it('should be able to add reservation and display it', () => {
  //   cy.get('.name')
  //   .type('Peter')
  //   .get('.date')
  //   .type('08/10')
  //   .get('.make-res-button').click()
  //   .get('.single-res-card').last()
  //   .contains('Peter')
  // });

});
