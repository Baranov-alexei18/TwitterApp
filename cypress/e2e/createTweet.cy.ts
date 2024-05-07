describe('Create tweet in Profile users', () => {
  it('allows user to create a tweet', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('userAuthToken', 'o1edZSRFwdPECculCypwSiLQEl13');
    });

    cy.intercept('POST', '/api/setTweetToFirestore', {
      statusCode: 200,
      body: {},
    }).as('createTweet');

    cy.visit('/feed/profile');

    cy.get('textarea').type('This is a test tweet');

    cy.get('[data-testid="textaria-btn"]').click();

    cy.contains('This is a test tweet').should('be.visible');
  });
});
