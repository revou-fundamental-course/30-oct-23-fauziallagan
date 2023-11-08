
describe('template spec', () => {
  beforeEach(() => {

    cy.visit('https://revou-fundamental-course.github.io/30-oct-23-fauziallagan/')

  })
  it('passes', () => {
    // cy.get('[data-cy="option"]').find('pria').check()
    cy.get('[data-cy="berat"]').type("80")
    cy.get('[data-cy="tinggi"]').type("189")
    cy.get('[data-cy="age"]').type("25")
    cy.get('[data-cy="hitung"]').contains('Hitung BMI').click()
    cy.get('[data-cy="hasil"]').contains('22.40 kg')
    cy.get('[data-cy="keterangan"]').should('have.text', "Keterangan : Ideal")
  })
  it('passes clear', () => {
    cy.get('[data-cy="reset"]').contains('Reset').click()
    cy.get('[data-cy="berat"]').should('have.value', '')
    cy.get('[data-cy="tinggi"]').should('have.value', '')
    cy.get('[data-cy="age"]').should('have.value', '')
  })
  it('passes Button Konsul', () => {
    cy.get('[data-cy = "konsul"]').click()
    cy.get('[data-cy = "konsul2"]').click()

  })
})