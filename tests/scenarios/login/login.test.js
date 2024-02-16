/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login/login.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/login/login.data";
beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Test Case Login", () => {
  it("Login with valid data", () => {
    element.fillFilledXpath(loginPage.usernameField, Cypress.env("username"));
    element.fillFilledXpath(loginPage.passwordField, Cypress.env("password"));
    element.clickXpath(loginPage.buttonLogin);
    assert.shouldExistXpath(loginPage.dashboardPage);
    assert.shouldContainTextXpath(loginPage.dashboardPage, "Dashboard");
  });

  it("Login with invalid data", () => {
    element.fillFilledXpath(
      loginPage.usernameField,
      data.INVALID_LOGIN.username,
    );
    element.fillFilledXpath(
      loginPage.passwordField,
      data.INVALID_LOGIN.password,
    );
    element.clickXpath(loginPage.buttonLogin);
    assert.shouldExistXpath(loginPage.errorMessage);
    assert.shouldContainTextXpath(
      loginPage.errorMessage,
      "Identitas tersebut tidak cocok dengan data kami.",
    );
  });

  it("Login without username", () => {
    element.fillFilledXpath(
      loginPage.passwordField,
      data.INVALID_LOGIN.password,
    );
    element.clickXpath(loginPage.buttonLogin);
    assert.invokeXpath(loginPage.usernameField);
  });

  it("Login without password", () => {
    element.fillFilledXpath(
      loginPage.usernameField,
      data.INVALID_LOGIN.username,
    );
    element.clickXpath(loginPage.buttonLogin);
    assert.invokeXpath(loginPage.passwordField);
  });

  it("Login without username and password", () => {
    element.clickXpath(loginPage.buttonLogin);
    assert.invokeXpath(loginPage.usernameField);
  });
});
