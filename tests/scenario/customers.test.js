import * as assert from "@helper/assert";
import * as element from "@helper/element";
import * as routes from "@helper/routes";
import { ROUTES } from "@tests/const/routes";

import * as addCustomerPage from "@tests/page/add-customer.page";
import * as bankManagerPage from "@tests/page/bank-manager.page";
import * as customersPage from "@tests/page/customers.page";
import * as openAccountPage from "@tests/page/open-account.page";

describe("Customers", () => {
  beforeEach(() => {
    routes.visit(ROUTES.customers);
  });

  it("Ensure all components are visible", () => {
    assert.shouldContainText("thead", "First Name");
    assert.shouldContainText("thead", "Last Name");
    assert.shouldContainText("thead", "Post Code");
    assert.shouldContainText("thead", "Account Number");
    assert.shouldContainText("thead", "Delete Customer");
    assert.shouldBeVisible(customersPage.searchCustomerField);
  });

  it("Ensure user is able to search customer data", () => {
    element.fillField(customersPage.searchCustomerField, "Hermoine");
    assert.shouldContainText("tbody", "Hermoine");
  });

  it("Ensure user is able to delete customer data", () => {
    const fNamefRow = cy.get(customersPage.firstNamefirstRow).invoke('val')
    assert.shouldContainText("tbody", "Hermoine");
    element.click((customersPage.deleteButton)+":first")
    assert.shouldNotContainText("tbody", "Hermoine");
  });

  it("Ensure first name column sorted when clicked", () => {
      element.click(customersPage.sortyByFirstName)
  });
});
