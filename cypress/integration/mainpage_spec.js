describe('Turing cafe main page', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", { fixture: 'test_mainpage.json' })
    cy.visit("http://localhost:3000/")
  });

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

  it("should be able to view current reservations", () => {
    cy.get(".all-reservations-cont")
    cy.get(".single-res-card")
      .should("have.length", 2)
        .first()
          .should("contain", "Christie")
          .should("contain", "12/29")
          .should("contain", "7:00")
          .should("contain", "Num of Guests: 12")
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

    cy.get(".make-res-button").click()

    cy.get(".all-reservations-cont")
    cy.get(".single-res-card")
      .should("have.length", 3)
        .last()
        .should("contain", "Robert")
        .should("contain", "1/21")
        .should("contain", "6:00")
        .should("contain", "Num of Guests: 4")
  });
});
