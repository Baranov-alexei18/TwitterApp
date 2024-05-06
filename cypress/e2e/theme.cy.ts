describe('Theme Switching', () => {
  it('Changes theme when switch is toggled', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('userAuthToken', 'ivPpGbEIoOOki8Yn3tKIWONcW0r1');
    });

    cy.visit('/feed');

    cy.get('[data-testid="theme-main"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-testid="theme-main"]').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('[data-testid="theme-id"]').click();

    cy.get('[data-testid="theme-main"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('[data-testid="theme-main"]').should('have.css', 'color', 'rgb(196, 196, 196)');

    cy.get('[data-testid="theme-id"]').click();

    cy.get('[data-testid="theme-main"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-testid="theme-main"]').should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
