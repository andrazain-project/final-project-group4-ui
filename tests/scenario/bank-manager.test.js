import * as assert from "@helper/assert";
import * as element from "@helper/element";
import * as routes from "@helper/routes";
import { ROUTES } from "@tests/const/routes";
import * as addCustomerData from "@tests/data/addCustomer.data";
import "cypress-localstorage-commands";

import * as addCustomerPage from "@tests/page/add-customer.page";
import * as bankManagerPage from "@tests/page/bank-manager.page";
import * as customersPage from "@tests/page/customers.page";
import * as openAccountPage from "@tests/page/open-account.page";

describe("Bank Manager Test", () => {
  beforeEach(() => {
    routes.visit(ROUTES.bankManagerLogin);
  });

  it("Ensure navigation buttons are visible and contain correct button name", () => {
    assert.shouldContainText(bankManagerPage.addCustomerButton, "Add Customer");
    assert.shouldContainText(bankManagerPage.openAccountButton, "Open Account");
    assert.shouldContainText(bankManagerPage.customersButton, "Customers");
    assert.shouldBeVisible(bankManagerPage.addCustomerButton);
    assert.shouldBeVisible(bankManagerPage.openAccountButton);
    assert.shouldBeVisible(bankManagerPage.customersButton);
  });

  it("Ensure the user is able to redirect to add customer page when user clicks add customer button", () => {
    element.click(bankManagerPage.addCustomerButton);
    assert.shouldIncludeURL(ROUTES.addCustomer)
  });

  it("Ensure the user is able to redirect to open account page when user clicks open account button", () => {
    element.click(bankManagerPage.openAccountButton);
    assert.shouldIncludeURL(ROUTES.openAccount)
  });

  it("Ensure the user is able to redirect to customers page when user clicks customers button", () => {
    element.click(bankManagerPage.customersButton);
    assert.shouldIncludeURL(ROUTES.customers)
  });
});
