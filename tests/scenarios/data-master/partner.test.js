/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import * as func from "@helpers/function";
import { ROUTES } from "@tests/const/routes";
import * as page from "@tests/pages/data-master/partner/partner.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/data-master/partner/partner.data";
beforeEach(() => {
   route.visit(ROUTES.login);
   cy.log(Cypress.env("username"));
   func.login(Cypress.env("username"), Cypress.env("password"));
});
describe("Test Case Data Master", () => {
   describe("Test Case Partner", () => {
      it("Show list data", () => {
         element.clickXpath(page.dataMasterMenu);
         element.clickXpath(page.partnerMenu);
         assert.shouldContainTextXpath(page.partnerList, "Partner");
      });

      it("Create data", () => {
         element.clickXpath(page.dataMasterMenu);
         element.clickXpath(page.partnerMenu);
         element.clickXpath(page.partnerCreateButton);
         element.fillFilledXpath(page.nameField, data.VALID_DATA.name);
         element.clickXpath(page.buttonSave);
         assert.shouldExistXpath(page.alertMessage);
         assert.shouldContainTextXpath(page.alertMessage, "Partner Berhasil Ditambahkan");
      });

      it("Search data", () => {
         element.clickXpath(page.dataMasterMenu);
         element.clickXpath(page.partnerMenu);
         element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
         assert.shouldContainTextXpath(page.dataSearch, data.VALID_DATA.name);
      });

      it("Edit data", () => {
         element.clickXpath(page.dataMasterMenu);
         element.clickXpath(page.partnerMenu);
         element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name);
         cy.wait(500);
         element.clickXpath(page.buttonEdit);
         element.clearFilledXpath(page.nameField);
         element.fillFilledXpath(page.nameField, data.VALID_DATA.name + "update");
         element.clickXpath(page.buttonSave);
         assert.shouldExistXpath(page.alertMessage);
         assert.shouldContainTextXpath(page.alertMessage, "Partner Berhasil Diperbarui");
      });

      it("Delete data", () => {
         element.clickXpath(page.dataMasterMenu);
         element.clickXpath(page.partnerMenu);
         element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.name + "update");
         cy.wait(500);
         element.clickXpath(page.buttonDelete);
         element.clickXpath(page.buttonConfirmDelate);
         assert.shouldContainTextXpath(page.alertMessage, "Partner Berhasil Dihapus");
      });
   });
});
