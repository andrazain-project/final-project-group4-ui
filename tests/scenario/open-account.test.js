import * as assert from "@helper/assert";
import * as element from "@helper/element";
import * as routes from "@helper/routes";
import { ROUTES } from "@tests/const/routes";
import * as addCustomerData from "@tests/data/addCustomer.data";

import * as addCustomerPage from "@tests/page/add-customer.page";
import * as bankManagerPage from "@tests/page/bank-manager.page";
import * as customersPage from "@tests/page/customers.page";
import * as openAccountPage from "@tests/page/open-account.page";

describe("Open Account Test", () => {
  beforeEach(() => {
    routes.visit(ROUTES.openAccount);
  });

  it("Ensure all components are visible", () => {
    assert.shouldContainText("label", "Customer :");
    assert.shouldContainText("label", "Currency :");
    assert.shouldBeVisible(openAccountPage.customerNameOpt);
    assert.shouldBeVisible(openAccountPage.currencyOpt);
    assert.shouldBeVisible(openAccountPage.processButton);
  });

  it("Ensure success alert displayed when user successfully open account", () => {
    element.clickOpt(openAccountPage.customerNameOpt, "Hermoine Granger");
    element.clickOpt(openAccountPage.currencyOpt, "Pound");
    element.click(openAccountPage.processButton);
    const account = JSON.parse(window.localStorage.getItem("Account"));
    const accKeys = Object.keys(account);
    const newAccountNum = Number(accKeys[accKeys.length - 1]) + 1;
    assert.displayAlert("Account created successfully with account Number :" + newAccountNum);
  });

  it("Ensure validation message displayed when user try to open account without selecting currency", () => {
    element.clickOpt(openAccountPage.customerNameOpt, "Hermoine Granger");
    element.click(openAccountPage.processButton);
    assert.msgShouldEqual(addCustomerPage.form, openAccountPage.currencyOpt, "Please select an item in the list.");
  });

  it("Ensure validation message displayed when user try to open account without selecting customer name", () => {
    element.clickOpt(openAccountPage.currencyOpt, "Pound");
    element.click(openAccountPage.processButton);
    assert.msgShouldEqual(addCustomerPage.form, openAccountPage.customerNameOpt, "Please select an item in the list.");
  });
});
