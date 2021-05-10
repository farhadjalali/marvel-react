beforeEach(() => {
    cy.visit('/')
})

describe("Search characters", () => {
    it('search by "ab" must be 5 items', () => {
        cy.get('input[name="search-input"]').type("ab").type("{enter}")
        cy.get('.character-card').should('have.length', 5)
    })

    it('search by "abc" must be 0 items', () => {
        cy.get('input[name="search-input"]').type("abc").type("{enter}")
        cy.get('.character-card').should('have.length', 0)
    })

    it('check "Load More" button after search by a (must be visible)', () => {
        cy.get('input[name="search-input"]').type("a").type("{enter}")
        cy.get('.btn-load-more').should('be.visible')
    })

    it('check "Load More" button after search by ab (must be hidden)', () => {
        cy.get('input[name="search-input"]').type("ab").type("{enter}")
        cy.get('.btn-load-more').should('not.exist')
    })

    it('search by "g" must be 20 items', () => {
        cy.get('input[name="search-input"]').type("g").type("{enter}")
        cy.get('.character-card').should('have.length', 20)
    })
})

describe("Load more", () => {
    it('search by "g", then load more must be 40 items', () => {
        cy.get('input[name="search-input"]').type("g").type("{enter}")
        cy.get('.btn-load-more').click()
        cy.get('.character-card').should('have.length', 40)
    })

    it('search by "g", then 2 times load more must be 60 items', () => {
        cy.get('input[name="search-input"]').type("g").type("{enter}")
        cy.get('.btn-load-more').click()
        cy.get('.btn-load-more').click()
        cy.get('.character-card').should('have.length', 60)
    })
})

describe("Hero cards", () => {
    it('Default must be 20 cards', () => {
        cy.get('.character-card').should('have.length', 20)
    })

    it('Check redirect after click first cards', () => {
        cy.get('.character-card').first().click()
        cy.location('pathname').should('match', /\/superhero\/\d+/)
    })
})
