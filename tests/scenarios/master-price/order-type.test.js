/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import * as func from "@helpers/function";
import { ROUTES } from "@tests/const/routes";
import * as page from "@tests/pages/master-price/order-type/order-type.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/master-price/order-type/order-type.data";
beforeEach(() => {
   route.visit(ROUTES.login);
   func.login(Cypress.env("username"), Cypress.env("password"));
   cy.log(data.VALID_DATA.price);
});
describe("Test Case Master Price", () => {
   describe("Test Case Order Type", () => {
      it("Show list data", () => {
         element.clickXpath(page.dataMasterPriceMenu);
         element.clickXpath(page.orderTypeMenu);
         assert.shouldContainTextXpath(page.orderTypeList, "Jenis Order");
      });

      it("Edit data", () => {
         element.clickXpath(page.dataMasterPriceMenu);
         element.clickXpath(page.orderTypeMenu);
         assert.shouldContainTextXpath(page.orderTypeList, "Jenis Order");
         element.clickXpath(page.buttonEdit);
         assert.shouldContainTextXpath(page.orderTypeList, "Jenis Order");
         element.clearFilledXpath(page.codeField);
         element.clearFilledXpath(page.nameField);
         element.clearFilledXpath(page.priceField);
         element.fillFilledXpath(page.codeField, data.VALID_DATA.code);
         element.fillFilledXpath(page.nameField, data.VALID_DATA.name);
         element.fillFilledXpath(page.priceField, data.VALID_DATA.price);
         element.clickXpath(page.buttonSave);
         assert.shouldContainTextXpath(page.alertMessage, "Jenis Order Berhasil Diperbarui");
      });

      it("Search data", () => {
         element.clickXpath(page.dataMasterPriceMenu);
         element.clickXpath(page.orderTypeMenu);
         element.fillFilledXpathSearch(page.searchField, data.VALID_DATA.code.toUpperCase());
         assert.shouldContainTextXpath(page.dataSearch, data.VALID_DATA.code.toUpperCase());
      });
   });
});
