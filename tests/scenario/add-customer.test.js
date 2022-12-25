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

describe("Add Customer Test", () => {
  beforeEach(() => {
    routes.visit(ROUTES.addCustomer);
  });

  it("Ensure all components are visible", () => {
    assert.shouldContainText("label", "First Name");
    assert.shouldContainText("label", "Last Name");
    assert.shouldContainText("label", "Post Code");
    assert.shouldBeVisible(addCustomerPage.firstNameField);
    assert.shouldBeVisible(addCustomerPage.lastNameField);
    assert.shouldBeVisible(addCustomerPage.postCodeField);
    assert.shouldBeVisible(addCustomerPage.addCustomerButton);
  });

  it("Ensure success alert displayed with customer id when user entered valid data", () => {
    element.fillfield(addCustomerPage.firstNameField, addCustomerData.FIRST_NAME);
    element.fillfield(addCustomerPage.lastNameField, addCustomerData.LAST_NAME);
    element.fillfield(addCustomerPage.postCodeField, addCustomerData.POST_CODE);
    element.click(addCustomerPage.addCustomerButton);
    const custId = Number(window.localStorage.getItem("maxUserId")) + 1;
    assert.displayAlert("Customer added successfully with customer id :" + custId);
    cy.window().then((win) => {
      const userList = JSON.parse(window.localStorage.getItem("User"));
      const { [custId]: user } = userList;
      expect(user.fName).to.eq(addCustomerData.FIRST_NAME);
    });
  });

  //   it("Ensure error alert displayed when user user entered empty data", () => {
  //     element.fillfield(addCustomerPage.lastNameField, addCustomerData.LAST_NAME);
  //     element.fillfield(addCustomerPage.postCodeField, addCustomerData.POST_CODE);
  //     element.click(addCustomerPage.addCustomerButton);
  //     cy.get('#item:invalid')
  //     .invoke('prop', 'validationMessage')
  //     .should('equal', 'Please fill out this field.');
  //   });

  it("Ensure error alert displayed when user entered registered data", () => {
    element.fillfield(addCustomerPage.firstNameField, addCustomerData.registered.regFName);
    element.fillfield(addCustomerPage.lastNameField, addCustomerData.registered.regLName);
    element.fillfield(addCustomerPage.postCodeField, addCustomerData.registered.regPCode);
    element.click(addCustomerPage.addCustomerButton);
    assert.displayAlert("Please check the details. Customer may be duplicate.");
  });
});
