import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import TourismHomePage from '../pageObjects/TourismHomePage';

Given('I open the STC Tourism homepage', () => {
  TourismHomePage.visit();
});

When('I navigate to the Customized tours page', () => {
  TourismHomePage.navigateToCustomizedTours();
});

And('I select {string} in the preferred stay dropdown', (stayType) => {
  TourismHomePage.selectPreferredStay(stayType);
});

And('I check the {string} checkbox', (country) => {
  TourismHomePage.checkCountryCheckbox(country);
});

And('I click on the Contact Us menu', () => {
  TourismHomePage.clickContactUs();
});

And('I search for {string} in the Contact Us search', (searchTerm) => {
  TourismHomePage.searchInContactUs(searchTerm);
});

And('I close the Contact Us window', () => {
  TourismHomePage.closeContactUsWindow();
});

Then('I submit the customized tour request', () => {
  TourismHomePage.submitCustomizedTourRequest();
});
