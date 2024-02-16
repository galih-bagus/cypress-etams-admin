/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import * as func from "@helpers/function";
import { ROUTES } from "@tests/const/routes";
import * as page from "@tests/pages/data-master/tailor/tailor.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/data-master/tailor/tailor.data";
beforeEach(() => {
  route.visit(ROUTES.login);
  func.login(Cypress.env("username"), Cypress.env("password"));
});
describe("Test Case Data Master", () => {
  describe("Test Case Tailor", () => {
    it("Show list data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.tailorMenu);
      assert.shouldContainTextXpath(page.tailorList, "Penjahit");
    });

    it("Create data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.tailorMenu);
      element.clickXpath(page.tailorCreateButton);
      element.fillFilledXpath(page.nameField, data.VALID_DATA.name);
      element.clickXpath(page.buttonSave);
      assert.shouldContainTextXpath(
        page.alertMessage,
        "Penjahit Berhasil Ditambahkan",
      );
    });

    it("Search data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.tailorMenu);
      element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
      assert.shouldContainTextXpath(page.dataSearch, data.VALID_DATA.name);
    });

    it("Edit data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.tailorMenu);
      element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
      cy.wait(500);
      element.clickXpath(page.buttonEdit);
      element.clearFilledXpath(page.nameField);
      element.fillFilledXpath(page.nameField, data.VALID_DATA.name + "update");
      element.clickXpath(page.buttonSave);
      assert.shouldContainTextXpath(
        page.alertMessage,
        "Penjahit Berhasil Diperbarui",
      );
    });

    it("Delete data", () => {
      element.clickXpath(page.dataMasterMenu);
      element.clickXpath(page.tailorMenu);
      element.fillFilledXpathSearch(
        page.searchField,
        data.VALID_DATA.name + "update",
      );
      cy.wait(500);
      element.clickXpath(page.buttonDelete);
      element.clickXpath(page.buttonConfirmDelate);
      assert.shouldContainTextXpath(
        page.alertMessage,
        "Penjahit Berhasil Dihapus",
      );
    });
  });
});
