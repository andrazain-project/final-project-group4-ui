export function get(selector) {
  return cy.get(selector);
}

export function fillField(selector, value) {
  return cy.get(selector).clear().type(value).should("have.value", value);
}


// export function click(selector) {
//     cy.get(selector).then(($el) => {
//         $el.click((event) => {
//             event.preventDefault();
//         });
//     });
// }

export function click(selector) {
  return cy.get(selector).click();
}

export function clickOpt(selector, selector1) {
  return cy.get(selector).select(selector1);
}
