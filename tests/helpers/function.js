import * as loginPage from "@tests/pages/login/login.page";
import * as element from "@helpers/element";

export function login(username, password) {
  element.fillFilledXpath(loginPage.usernameField, username);
  element.fillFilledXpath(loginPage.passwordField, password);
  element.clickXpath(loginPage.buttonLogin);
}
