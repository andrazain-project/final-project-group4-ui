export function shouldContainText(selector, ...args){
    return cy.get(selector).should("contain", ...args)
}

export function shouldNotContainText(selector, ...args){
    return cy.get(selector).should("not.contain", ...args)
}

export function displayAlert(...args){
    return cy.on('window:alert',(txt)=>{
    expect(txt).to.contains(...args);
    })
    }

export function equal(selector, ...args){
    return cy.get(selector).should('equal', ...args)
}

export function shouldBeVisible(selector){
    return cy.get(selector).should('be.visible')
}

export function shouldIncludeURL( ...args){
    return cy.url().should("include", ...args);
}

export function msgShouldEqual(selector, selector1, ...args){
    return cy.get(selector).within(() => {
        cy.get(selector1)
        .invoke("prop", "validationMessage")
        .should("equal", ...args);
    });
}
