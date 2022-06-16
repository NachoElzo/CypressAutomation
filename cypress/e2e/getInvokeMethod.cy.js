describe('This will be the second suite case', () => {

    it ('First test', () => {
        cy.visit('/') 
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

     //WAY 1 IN CYPRESS TO GET AND ASSERT AN ELEMENT
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
     
    //WAY 1 IN JQUERY TO GET AND ASSERT AN ELEMENT
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

    //WAY 3 IN CYPRESS invoke method to get same element saved in a variable
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')

        }) 

    //CHECK A CHECKBOX + ASSERT IF IS SELECTED
        cy.contains('nb-card','Basic form') //tagName + text inside the tag
        .find ('.custom-checkbox')
        .click()
        .invoke('attr', 'class') //atribute as name class
        //.should('contain', 'checked') //without saving the value in a variable
        //saved in a variable that can be used for more asserts
        .then(classValue => {
            expect(classValue).to.contains('checked')

        })


    })
       
})
