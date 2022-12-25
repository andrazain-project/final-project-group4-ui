export function shouldContainText(selector, ...args){
    return cy.get(selector).should("contain", ...args)
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
