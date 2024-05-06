describe('Signup page', () => {
  it('redirects to login page when "use Email" is clicked', () => {
    cy.visit('/sign-up');

    cy.contains('a', 'Use email').click();

    cy.url().should('include', '/login');
  });

  it('show error toast if email exists', () => {
    cy.intercept('POST', '/api/signup', {
      statusCode: 400,
      body: {
        error: 'auth/email-already-in-use',
      },
    });

    cy.visit('/sign-up');

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="password"]').type('password123#');

    cy.get('[data-testid="year-id"]').should('exist').select('1990');
    cy.get('[data-testid="month-id"]').select('январь');
    cy.get('[data-testid="day-id"]').select('1');

    cy.contains('button', 'Next').click();

    cy.get('[data-testid="toast"]').should('be.visible').and('contain', 'This email already exists');
  });

  it('successfully submits the signup form', () => {
    cy.visit('/sign-up');

    cy.get('input[name="name"]').type('John Doe').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="phone"]').type('1234567890').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="email"]').type('example3@example.com').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="password"]').type('password123#').should('not.have.css', 'border-color', 'red');

    cy.get('[data-testid="year-id"]').should('exist').select('1990');
    cy.get('[data-testid="month-id"]').select('январь');
    cy.get('[data-testid="day-id"]').select('1');
  });

  it('errors input the signup form', () => {
    cy.visit('/sign-up');

    cy.get('input[name="name"]').type('Joh').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="phone"]').type('1234567890').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="email"]').type('example3@exampl').should('not.have.css', 'border-color', 'red');
    cy.get('input[name="password"]').type('password').should('not.have.css', 'border-color', 'red');

    cy.get('[data-testid="year-id"]').select('1990');
    cy.get('[data-testid="month-id"]').select('январь');
    cy.get('[data-testid="day-id"]').select('1');

    cy.contains('button', 'Next').click();

    cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(255, 0, 0)');
    cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(255, 0, 0)');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(255, 0, 0)');
  });
});
