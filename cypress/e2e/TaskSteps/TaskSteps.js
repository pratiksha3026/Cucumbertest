import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Magento sign-up page', () => {
  console.log('Navigating to the sign-up page');
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
});

When('I fill in the required details', () => {
  console.log('Filling in required details');
  cy.get('#firstname').type('Pratiksha');
  cy.get('#lastname').type('Bhosale');
  cy.get('#email_address').type('prati@gmail.com');
  cy.get('#password').type('Pratib123');
  cy.get('#password-confirmation').type('Pratib123');
});

When('I click "Register"', () => {
  console.log('Clicking Register');
  cy.get('.action.submit.primary').click();
});

Then('I should be logged in with my new account', () => {
  console.log('Checking if logged in');
  cy.url().should('include', '/customer/account/');
});

Given('I am on the Magento sign-in page', () => {
  console.log('Navigating to the sign-in page');
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
});

When('I enter my email and password', () => {
  console.log('Entering email and password');
  cy.get('#email').type('prati@gmail.com');
  cy.get('#pass').type('Pratib123');
});

When('I click "Sign In"', () => {
  console.log('Clicking Sign In');    
  cy.get('#send2').click();
});

Then('I should be logged in and redirected to the dashboard', () => {
  console.log('Checking if redirected to dashboard');
  cy.url().should('include', '/customer/account/');
});
 