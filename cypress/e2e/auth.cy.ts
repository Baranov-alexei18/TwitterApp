describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('displays error message for invalid credentials', () => {
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('invalidpassword');

    cy.contains('button', 'Log in').click();

    cy.contains('Email or password incorrect').should('be.visible');
  });

  it('submits the login form with valid credentials', () => {
    cy.get('input[name="email"]').type('test@mail.com');
    cy.get('input[name="password"]').type('qwer123#');

    cy.contains('button', 'Log in').click();

    cy.url().should('include', '/feed');

    cy.window().then((win) => {
      // eslint-disable-next-line no-unused-expressions
      expect(win.localStorage.getItem('userAuthToken')).to.exist;
    });
  });
});
