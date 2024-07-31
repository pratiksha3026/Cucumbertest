Feature: Sign up and Sign in

  Scenario Outline: Create a new account
    Given I am on the Magento sign-up page
    When I fill in the required details
    And I click "Register"
    Then I should be logged in with my new account

  Scenario Outline: Sign in with the new account
    Given I am on the Magento sign-in page
    When I enter my email and password
    And I click "Sign In"
    Then I should be logged in and redirected to the dashboard
