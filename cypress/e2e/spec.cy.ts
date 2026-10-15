describe('My First Test', () => {
  it('Test header component', () => {
    cy.visit('/')
    cy.contains('Juan Ramos')
  })
  it('Test work-experience component', () => {
    cy.visit('/')
    cy.contains('Backend Developer')
  })
  it('Test education component', () => {
    cy.visit('/')
    cy.contains('Facultad de Negocios y Tecnologías, Universidad Veracruzana')
  })
  it('Test languages component', () => {
    cy.visit('/')
    cy.contains('Spanish')
    cy.contains('English')
  })
  it('Test skills component', () => {
    cy.visit('/')
    cy.contains('Java')
    cy.contains('Git')
    cy.contains('SQL')
    cy.contains('Angular')
    cy.contains('Teamwork')
    cy.contains('Communication')
  })
  it('Test interests component', () => {
    cy.visit('/')
    cy.contains('Videogames')
    cy.contains('Music production')
    cy.contains('Music')
    cy.contains('Software development')
  })
})
