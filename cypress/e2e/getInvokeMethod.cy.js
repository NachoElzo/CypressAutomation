describe('This will be the second suite case', () => {

    it ('First test', () => {
        cy.visit('/') 
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

     //WAY 1 IN CYPRESS TO GET AND ASSERT AN ELEMENT
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
        
       
    })
   
})