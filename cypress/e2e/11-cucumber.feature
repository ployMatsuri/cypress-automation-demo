Feature: Login feature

As a valid user
I want to login to application

Scenario: Login with valid user
    Given I open login page
    And I click make appointment button
    When  I fill username "John Doe"
    And I fill password "ThisIsNotAPassword"
    And I click login button
    Then I can see appointment page