describe('This will be the second suite case', () => {

    it ('First test', () => {
        cy.visit('/') 
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then( input => {
            //as we cant click in jquery functions we have to wrap this function in order to click
            cy.wrap(input).click() 
            cy.get('nb-calendar-picker').contains('8').click()
            //you will find the property type value in properties sheet of the browser debugger with the date selected
            cy.wrap(input).invoke('prop','value').should('contain','Jun 8, 2022') 
        })

        })


    })
       
