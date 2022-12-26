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
    assert.shouldIncludeURL(ROUTES.addCustomer);
    assert.shouldContainText("label", "First Name");
    assert.shouldContainText("label", "Last Name");
    assert.shouldContainText("label", "Post Code");
    assert.shouldBeVisible(addCustomerPage.firstNameField);
    assert.shouldBeVisible(addCustomerPage.lastNameField);
    assert.shouldBeVisible(addCustomerPage.postCodeField);
    assert.shouldBeVisible(addCustomerPage.addCustomerButton);
  });

  it("Ensure the user is able to redirect to open account page when user clicks open account button", () => {
    element.click(bankManagerPage.openAccountButton);
    assert.shouldIncludeURL(ROUTES.openAccount);
    assert.shouldContainText("label", "Customer :");
    assert.shouldContainText("label", "Currency :");
    assert.shouldBeVisible(openAccountPage.customerNameOpt);
    assert.shouldBeVisible(openAccountPage.currencyOpt);
    assert.shouldBeVisible(openAccountPage.processButton);
  });

  it("Ensure the user is able to redirect to customers page when user clicks customers button", () => {
    element.click(bankManagerPage.customersButton);
    assert.shouldIncludeURL(ROUTES.customers);
    assert.shouldContainText("thead", "First Name");
    assert.shouldContainText("thead", "Last Name");
    assert.shouldContainText("thead", "Post Code");
    assert.shouldContainText("thead", "Account Number");
    assert.shouldContainText("thead", "Delete Customer");
    assert.shouldBeVisible(customersPage.searchCustomerField);
  });
});
