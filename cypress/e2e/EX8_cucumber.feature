Feature: Login feature

As a valid user
I want to login to application

Scenario: Login with invalid user
    Given I open login page
    When I fill username with "username"
    And I fill password with "password"
    And I click remember me
    And I click Sign in
    Then I should see homepage

Scenario: Login with valid user
    Given I open login page
    When I fill username with "wrong username"
    And I fill password with "wrong password"
    And I click remember me
    And I click Sign in
    Then I should see error message