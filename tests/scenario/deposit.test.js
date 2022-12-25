import * as assert from '@helper/assert';
import * as element from '@helper/element';
import * as routes from '@helper/routes';
import {ROUTES} from '@tests/const/routes';
import * as data from '@tests/data/deposit.data';

import * as homePage from '@tests/page/home.page';
import * as loginPage from '@tests/page/login.page';
import * as depositMenu from '@tests/page/deposit-menu.page';

describe("As a user, i can deposit some of the amount money", () => {

    beforeEach(() => {
        routes.visit(ROUTES.home);    
    });

    it("As a user, i can deposit some of the amount money in Dollar currency account", () => {
        //login as Albus Dumbledore
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        //assert the Account Name and Dollar Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        assert.shouldContainText(loginPage.valueOfCurrency, "Dollar");

        //deposit the money
        element.click(loginPage.deposit);
        element.click(depositMenu.amountToBeDeposit);
        element.fillfield(depositMenu.amountToBeDeposit, data.DEPOSIT_AMOUNT.dollar);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");
    });

    it("As a user, i can deposit some of the amount money in Pound currency account", () => {
        //login as Albus Dumbledore
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        //assert the Account Name and Dollar Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        element.clickOpt(loginPage.accountSelect, "1011");
        assert.shouldContainText(loginPage.valueOfCurrency, "Pound");

        //deposit the money
        element.click(loginPage.deposit);
        element.click(depositMenu.amountToBeDeposit);
        element.fillfield(depositMenu.amountToBeDeposit, data.DEPOSIT_AMOUNT.pound);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");
    });

    it("As a user, i can deposit some of the amount money in Rupee currency account", () => {
        //login as Albus Dumbledore
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        //assert the Account Name and Dollar Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        element.clickOpt(loginPage.accountSelect, "1012");
        assert.shouldContainText(loginPage.valueOfCurrency, "Rupee");

        //deposit the money
        element.click(loginPage.deposit);
        element.click(depositMenu.amountToBeDeposit);
        element.fillfield(depositMenu.amountToBeDeposit, data.DEPOSIT_AMOUNT.rupee);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");
    });

});