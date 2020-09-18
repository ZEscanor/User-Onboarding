
///<reference types="cypress" />

//.eql is super strict
// equal is strict
// not equal is not strict
// so .not.eql works for strictness
// type({shift})
//exist an not.exist

const isDisabled = () => {
    cy.get(".button").should('be.disabled')
}
const isEnabled= () => {
    cy.get(".button").should('be.enabled')
}
describe('Quotes app', () => {
    beforeEach(() => {
        //code to run before each test like navigation
        cy.visit('http://localhost:3000')

    })
    //it is a test and expect is a assertion can be multipke assertions
    it('sanity', () =>{
       expect(1+2).to.equal(3)
       expect(2+2).not.to.equal(5 )
    } )

    it("dom element", () =>
    {
        // get a specific elemetnt similar to query selector
        cy.get('input[name="name"]').should('exist') .type("ab")
        cy.get('input[name="email"]').should('exist') .type("ab")
        cy.get('input[name="password"]').should('exist')
        .type("ab")
        //validation left empty
       cy.get(".errors").contains(/password must be at least/i)
       cy.get(".errors").contains(/needs/i)
       cy.get(".errors").contains(/username must be/i)
        cy.get('input[name="termsOfService"][type="checkbox"]').should('exist')  //.click()   if we add this it will select the element
        //check if it strictly contains an element
        cy.contains(/name/i).should('exist')
    })

    it("we can type", () => {
        //grab inputs assert empty type in assert typed content is there
        //name
        cy.get('input[name="name"]')
        .should('have.value', '')
        .type("My name is Mobius")
        .should("have.value", "My name is Mobius")
        isDisabled()
        
        
       //email
        cy.get('input[name="email"]')
        .should('have.value', '')
        .type("mobius@aol.com") // wow we can chain should statements like so
        .should('have.value',"mobius@aol.com")
       isDisabled()

        //password
        cy.get('input[name="password"]')
        .should('have.value', '')
        .type("wowThisIsReallyAGood")
        .should('have.value', "wowThisIsReallyAGood")
        isDisabled()

        cy.get('input[name="termsOfService"][type="checkbox"]').click()
        isEnabled()
    })


    //user can submit the form
    // it("user Can submit", () => {
    //     cy.get(".button").should('be.disabled')
    // })
})