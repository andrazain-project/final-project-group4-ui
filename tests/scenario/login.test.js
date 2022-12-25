import * as assert from '@helper/assert';
import * as element from '@helper/element';
import * as routes from '@helper/routes';
import {ROUTES} from '@tests/const/routes';

import * as homePage from '@tests/page/home.page';
import * as loginPage from '@tests/page/login.page';

import "cypress-localstorage-commands";

describe("Login Account", () => {

    beforeEach(() => {
        routes.visit(ROUTES.home);
    })

    it('As a user, i can login with any of the existing names', () => {
        element.click(homePage.customerLoginHomePage);
        element.clickOpt(loginPage.dropDownName, "Albus Dumbledore");
        element.click(loginPage.loginButton);

        assert.shouldContainText(loginPage.welcomeNameAccount, "Albus Dumbledore");
    });
})