import * as assert from '@helper/assert';
import * as element from '@helper/element';
import * as routes from '@helper/routes';
import {ROUTES} from '@tests/const/routes';
import * as dataDeposit from '@tests/data/deposit.data';
import * as dataWithdrawl from '@tests/data/withdrawl.data';

import * as homePage from '@tests/page/home.page';
import * as loginPage from '@tests/page/login.page';
import * as depositMenu from '@tests/page/deposit-menu.page';
import * as withdrawlMenu from '@tests/page/withdrawl-menu.page';

describe("As a user, i can deposit some of the amount money", () => {

    beforeEach(() => {
        routes.visit(ROUTES.home);    
    });

    /**
     * 
     * DEPOSIT
     * 
     */
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
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.dollar);
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
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.pound);
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
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.rupee);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");
    });



    /**
     * 
     * WITHDRAWL
     * 
     */
    it("as a user, i can withdrawl some of the amount money in Dollar currency account", () => {
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
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.dollar);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");

        //withdrawl the money
        element.click(loginPage.withdrawl);
        element.click(loginPage.deposit);
        cy.wait(3000);
        element.click(loginPage.withdrawl);
        element.fillfield2(withdrawlMenu.amountToBeWithdrawl, dataWithdrawl.WITHDRAWL_AMOUNT.dollar);
        element.click(withdrawlMenu.withdrawlButton);

        //assert the successfull
        cy.wait(3000);
        assert.shouldContainText(withdrawlMenu.assertWithdrawl, "Transaction successful");
    });

    it("as a user, i can withdrawl some of the amount money in Pound currency account", () => {
        //login as Albus Dumbledore
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        //assert the Account Name and Pound Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        element.clickOpt(loginPage.accountSelect, "1011");
        assert.shouldContainText(loginPage.valueOfCurrency, "Pound");

        //deposit the money
        element.click(loginPage.deposit);
        element.click(depositMenu.amountToBeDeposit);
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.pound);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");

        //withdrawl the money
        element.click(loginPage.withdrawl);
        element.click(loginPage.deposit);
        cy.wait(3000);
        element.click(loginPage.withdrawl);
        element.fillfield2(withdrawlMenu.amountToBeWithdrawl, dataWithdrawl.WITHDRAWL_AMOUNT.pound);
        element.click(withdrawlMenu.withdrawlButton);

        //assert the successfull
        cy.wait(3000);
        assert.shouldContainText(withdrawlMenu.assertWithdrawl, "Transaction successful");
    });

    it("as a user, i can withdrawl some of the amount money in Rupee currency account", () => {
        //login as Albus Dumbledore
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        //assert the Account Name and Rupee Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        element.clickOpt(loginPage.accountSelect, "1011");
        assert.shouldContainText(loginPage.valueOfCurrency, "Pound");

        //assert the Account Name and Dollar Currency
        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
        element.clickOpt(loginPage.accountSelect, "1012");
        assert.shouldContainText(loginPage.valueOfCurrency, "Rupee");

        //deposit the money
        element.click(loginPage.deposit);
        element.click(depositMenu.amountToBeDeposit);
        element.fillfield(depositMenu.amountToBeDeposit, dataDeposit.DEPOSIT_AMOUNT.rupee);
        element.click(depositMenu.depositButton);

        //assert the successfull
        assert.shouldContainText(depositMenu.assertDepositSuccess, "Deposit Successful");

        //withdrawl the money
        element.click(loginPage.withdrawl);
        element.click(loginPage.deposit);
        cy.wait(3000);
        element.click(loginPage.withdrawl);
        element.fillfield2(withdrawlMenu.amountToBeWithdrawl, dataWithdrawl.WITHDRAWL_AMOUNT.rupee);
        element.click(withdrawlMenu.withdrawlButton);

        //assert the successfull
        cy.wait(3000);
        assert.shouldContainText(withdrawlMenu.assertWithdrawl, "Transaction successful");
    });

});