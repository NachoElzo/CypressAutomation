//for visual studio intelligence for cypress
///  <reference types="cypress"/>

describe('This will be the second suite case', () => {

    it ('First test', () => {
    //Main root configured in cypress.config.js
        cy.visit('/') 
        
    //LOCATORS
        //Contain Text
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //By tag Name
        cy.get('input')
        //By ID
        cy.get('#inputEmail1')
        //By Class name 
        cy.get('.input-full-width')
        //By Attribute name
        cy.get('[placeholder]')
         //By Attribute name and value
        cy.get('[placeholder="Email"]')
        //By Class value (all value)
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //By tag and atribute value
        cy.get('input[placeholder="Email"]')
        //By 2 differents atributes
        cy.get('[placeholder="Email"][type="email"]')
        //By tag name, attribute with value, ID and class name 
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //By atribute value and text
        cy.contains('[status="primary"]','Sign in')
       //Create your own data atributes for cypress in the web objects
        cy.get('[data-cy="imputEmail1"]')
        ////Find the element through the parents
        cy.contains('nb-card','Horizontal form').find('[type="email"]')
        
        //Navigate into the DOM
        cy.get('#inputEmail3')
            .parents('form')
            //in cypres find method is only for find childs inside the parent element
            .find('button')
            .should('contain', 'Sign in')
            //for search the parent inside the child
            .parents('form') 
            .find('.custom-checkbox')
            .click()
    })
   
})