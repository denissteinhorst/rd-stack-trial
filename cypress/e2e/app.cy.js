const localizedStrings = require('../fixtures/localizedStrings.json')

describe('The Todo-App', () => {

    /**
     * Table of Contents
     *
     * VISUAL APPEARANCE (localisation / initial values)
     *  - it should have the correct text values for the default language (en)
     *  - it should change the language when clicking the button
     *  - it should have 3 todo items in the list
     *  - it should have the last todo item checked and the first two unchecked
     *
     * FUNCTIONALITY
     * - it should have an empty input field and a disabled button
     * - it should enable the button when entering text
     * - it should add a todo item when clicking the button with text in the input field
     * - it should remove a todo item when clicking the delete button (trash icon svg)
     * - it should check a todo item when clicking the checkbox
     * - it should uncheck a todo item when clicking the checkbox again
     */

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000) // wait for the app to load
    })

    /**
     * VISUAL APPEARANCE (Localisation)
     */

    it('should have the correct text values for the default language (en)', () => {
        cy.get('h1').should('have.text', localizedStrings.en.name)
        cy.get('button#changeLocale').should('have.text', ' DE ')
        cy.get('p:first-of-type').should('have.text', localizedStrings.en.intro)
        cy.get('label').should('have.text', localizedStrings.en.placeholder)
        cy.get('button#todoInputButton').should('have.text', localizedStrings.en.saveEntry)
    })

    it('should change the language when clicking the button', () => {
        cy.get('button#changeLocale').click()
        cy.wait(1000) // wait for the app to load
        cy.get('h1').should('have.text', localizedStrings.de.name)
        cy.get('button#changeLocale').should('have.text', ' EN ')
        cy.get('p:first-of-type').should('have.text', localizedStrings.de.intro)
        cy.get('label').should('have.text', localizedStrings.de.placeholder)
        cy.get('button#todoInputButton').should('have.text', localizedStrings.de.saveEntry)
    })

    it('should have 3 todo items in the list', () => {
        cy.get('ul#todoList').children().should('have.length', 3)
    })

    it('should have the last todo item checked and the first two unchecked', () => {
        cy.get('ul#todoList').children().eq(0).find('input[type="checkbox"]').should('not.be.checked')
        cy.get('ul#todoList').children().eq(1).find('input[type="checkbox"]').should('not.be.checked')
        cy.get('ul#todoList').children().eq(2).find('input[type="checkbox"]').should('be.checked')
    })

    /**
     * FUNCTIONALITY
     */

    it('should have an empty input field and a disabled button', () => {
        cy.get('input#todoInput').should('have.value', '')
        cy.get('button#todoInputButton').should('be.disabled')
    })

    it('should enable the button when entering text', () => {
        cy.get('input#todoInput').type('Test')
        cy.get('button#todoInputButton').should('not.be.disabled')
    })

    it('should add a todo item when clicking the button with text in the input field', () => {
        cy.get('input#todoInput').type('Test')
        cy.get('button#todoInputButton').click()
        cy.wait(1000)
        cy.get('ul#todoList').children().should('have.length', 4)
    })

    it('should remove a todo item when clicking the delete button (trash icon svg)', () => {
        cy.get('ul#todoList').children().eq(0).find('svg').click()
        cy.wait(1000)
        cy.get('ul#todoList').children().should('have.length', 2)
    })

    it('should check a todo item when clicking the checkbox', () => {
        cy.get('ul#todoList').children().eq(0).find('input[type="checkbox"]').click()
        cy.get('ul#todoList').children().eq(0).find('input[type="checkbox"]').should('be.checked')
    })

    it('should uncheck a todo item when clicking the checkbox again', () => {
        cy.get('ul#todoList').children().eq(2).find('input[type="checkbox"]').click()
        cy.get('ul#todoList').children().eq(2).find('input[type="checkbox"]').should('not.be.checked')
    })
})