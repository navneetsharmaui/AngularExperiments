import { getGreeting } from '../support/app.po';

describe('web-angular-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to web-angular-app!');
  });
});
