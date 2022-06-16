///  <reference types="cypress"/>

describe('This will be the second suite case', () => {

    it ('First test', () => {
        cy.visit('/') 
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //function inside the contains function for search and compare objects inside a form 
        cy.contains('nb-card','Using the Grid').then(firstForm => {
            //Variable that call the fist function locator
            const firstEmail = firstForm.find('[for="inputEmail1"]').text()
            const firstPass = firstForm.find('[for="inputPassword2"]').text()
            //assert for compare the variable that stores the object with the object text
            expect(firstEmail).to.equal('Email') 
            expect(firstPass).to.equal('Password')

            //If we want to compare 2 objects with the same text should be wrapped inside the function
            cy.contains('nb-card','Basic form').then(SecondForm => {
                const secondEmail = SecondForm.find('[for="exampleInputEmail1"]').text()
                const secondPass = SecondForm.find('[for="exampleInputPassword1"]').text()
                expect(secondEmail).to.equal('Email address') 
                //In this case both password objects from the differents forms have same text 
                expect(firstPass).to.equal(secondPass)

                //In order to Wrap the Jquery Function into the cypress functions, 
                //we call wrap function and still working with cypress format
                cy.wrap(SecondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })

        })
        
       
    })
   
})