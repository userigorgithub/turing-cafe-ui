describe('Turing cafe main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to visit the main page by accessing `http://localhost:3000`', () => {
    cy.url('http://localhost:3000')
  });

  it('should be able to visit the main page and render the title', () => {
    cy.contains('Turing Cafe Reservations')
  });




});
