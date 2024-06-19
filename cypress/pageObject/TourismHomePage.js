import { TourismLocators } from '../locators/TourismLocators';

class TourismHomePage {
  visit() {
    cy.visit('https://nichethyself.com/tourism/home.html');
  }

  navigateToCustomizedTours() {
    cy.contains(TourismLocators.customizedToursLink).click();
  }

  selectPreferredStay(stayType) {
    cy.get(TourismLocators.preferredStayDropdown).select(stayType);
  }

  checkCountryCheckbox(country) {
    cy.get(TourismLocators.getCountryCheckbox(country)).check();
  }

  clickContactUs() {
    cy.contains(TourismLocators.contactUsMenu).click();
  }

  searchInContactUs(searchTerm) {
    cy.get(TourismLocators.searchIconSelector).click();
    cy.get(TourismLocators.searchPopupInput).type(searchTerm);
    cy.contains(TourismLocators.searchOkButton).click();
  }

  closeContactUsWindow() {
    cy.get(TourismLocators.closeContactUsButton).click();
  }

  submitCustomizedTourRequest() {
    cy.contains(TourismLocators.submitButton).click();
  }
}

export default new TourismHomePage();
