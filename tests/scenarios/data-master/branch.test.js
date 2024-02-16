/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import * as func from "@helpers/function";
import { ROUTES } from "@tests/const/routes";
import * as page from "@tests/pages/data-master/branch/branch.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/data-master/branch/branch.data";
const dotenv = require("dotenv");
dotenv.config();
beforeEach(() => {
  route.visit(ROUTES.login);
  func.login(Cypress.env("username"), Cypress.env("password"));
});
describe("Test Case Data Master", () => {
  describe("Test Case Branch", () => {
    it("Show list data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.branchMenu);
      assert.shouldContainTextXpath(page.branchList, "Cabang");
    });

    it("Create data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.branchMenu);
      element.clickXpath(page.branchCreateButton);
      element.fillFilledXpath(page.nameField, data.VALID_DATA.name);
      element.fillFilledXpath(page.urlField, data.VALID_DATA.url);
      element.clickXpath(page.buttonSave);
      assert.shouldContainTextXpath(
        page.alertMessage,
        "Kantor Cabang Berhasil Ditambahkan",
      );
    });

    it("Search data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.branchMenu);
      element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
      assert.shouldContainTextXpath(page.dataSearch, data.VALID_DATA.name);
    });

    it("Edit data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.branchMenu);
      element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
      element.clickXpath(page.buttonEdit);
      element.clearFilledXpath(page.nameField);
      element.clearFilledXpath(page.urlField);
      element.fillFilledXpath(page.nameField, data.VALID_DATA.name + "update");
      element.fillFilledXpath(page.urlField, data.VALID_DATA.url + "update");
      element.clickXpath(page.buttonSave);
      assert.shouldContainTextXpath(
        page.alertMessage,
        "Kantor Cabang Berhasil Diperbarui",
      );
    });
  });
});
