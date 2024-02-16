/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login/login.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/login/login.data";
const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();
beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("Login", () => {
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
});
