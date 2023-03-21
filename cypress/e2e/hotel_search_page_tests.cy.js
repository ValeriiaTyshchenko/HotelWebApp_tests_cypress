///<reference types = "Cypress"/>

describe('navigate to main page', () => {


  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   //returning false here prevents Cypress from failing the test
  //   return false
  // })

  const hotel_menu_button = '[class="hotels"]';
  const search_button = '[type="submit"]';
  const tours_menu_button = '[class="tours js-list-tours"]';
  const things_to_do_menu_button = '[class="tours attraction-link"]';
  const logo = '[class="logo"]';
  const search_hotel_form = '[class="form-centered"]';
  const select_field = '[name="Filter.DestinationId"]';
  const children_number_field = '#Filter_ChildrenNum';
  const children1_age_box = '[id="Filter_ChildrensAge[0]"]';
  const children2_age_box = '[id="Filter_ChildrensAge[1]"]';
  const children3_age_box = '[id="Filter_ChildrensAge[2]"]';
  const children4_age_box = '[id="Filter_ChildrensAge[3]"]';
  const children5_age_box = '[id="Filter_ChildrensAge[4]"]';
  const search_result_list = '[class="hotels-list"]';
  const error_message = '[class="field-validation-error"]';
  const checkin_box = '[name="Filter.CheckIn"]';
  const checkout_box = '[name="Filter.CheckOut"]';
  const valid_data = '[class="field-validation-valid"]';
  const adults_box = '[id="Filter_AdultNum"]'


  beforeEach(() => {
    cy.visit(' https://www.accesstravel.com/en-US/Hotel/List')
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Hotel/List')
  })



  it('Positive test Jerusalem', () => {
    cy.get(select_field).should('be.visible')
    cy.get(select_field).select('8', {force:true}).should('have.value', '8').should('be.visible')
    cy.get(search_button).click()
    cy.url().should('have.string', 'DestinationId=8')
  })

  it('Positive test London', () => {
    cy.get(select_field).should('be.visible')
    cy.get(select_field).select('31', {force:true}).should('have.value', '31').should('be.visible')
    cy.get(search_button).click()
    cy.url().should('have.string', 'DestinationId=31')
  })

  it('Positive test New York', () => {
    cy.get(select_field).should('be.visible')
    cy.get(select_field).select('51', {force:true}).should('have.value', '51').should('be.visible')
    cy.get(search_button).click()
    cy.url().should('have.string', 'DestinationId=51')
  })

  it('choosing a valid number of children  ', () => {
    cy.get(children_number_field).should('be.visible')
    cy.get(children_number_field).clear().type('5').should('have.value','5',{force:true})
    cy.get('.hotels-wrap').click()
    cy.get(children1_age_box).should('be.visible')
    cy.get(children2_age_box).should('be.visible')
    cy.get(children3_age_box).should('be.visible')
    cy.get(children4_age_box).should('be.visible')
    cy.get(children5_age_box).should('be.visible')
    cy.get(children1_age_box).clear().type('1',{force:true}).should('have.value','1',{force:true})
    cy.get(children2_age_box).clear().type('17',{force:true}).should('have.value','17',{force:true})
    cy.get(children3_age_box).clear().type('5',{force:true}).should('have.value','5',{force:true})
    cy.get(children4_age_box).clear().type('10',{force:true}).should('have.value','10',{force:true})
    cy.get(children5_age_box).clear().type('15',{force:true}).should('have.value','15',{force:true})
    cy.get(select_field).select('31', {force:true}).should('have.value', '31').should('be.visible')
    cy.get(search_button).click()
    cy.get(search_result_list).should('be.visible')

  })

  it('choosing a valid age of children  ', () => {
    cy.get(children_number_field).should('be.visible')
    cy.get(children_number_field).clear().type('2').should('have.value','2',{force:true})
    cy.get('.hotels-wrap').click()
    cy.get(children1_age_box).should('be.visible')
    cy.get(children1_age_box).should('have.value','0',{force:true})
    cy.get(children1_age_box).clear().type('1',{force:true}).should('have.value','1',{force:true})
    cy.get(children2_age_box).clear().type('17',{force:true}).should('have.value','17',{force:true})
    cy.get(select_field).select('8', {force:true}).should('have.value', '8').should('be.visible')
    cy.get(search_button).click()
    cy.get(search_result_list).should('be.visible')
    })


  it('Negative test - invalid checkin data  ', () => {
    cy.get(checkin_box).should('be.visible')
    cy.get(checkout_box).should('be.visible')
    cy.get(checkin_box).clear().type('2023-03-20').should('have.value', '2023-03-20', { force: true })
    cy.get(select_field).select('8', { force: true }).should('have.value', '8').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

  it('Negative test - invalid checkout data  ', () => {
    cy.get(checkin_box).should('be.visible')
    cy.get(checkout_box).should('be.visible')
    cy.get(checkout_box).clear().type('2023-03-20').should('have.value', '2023-03-20', { force: true })
    cy.get(select_field).select('8', { force: true }).should('have.value', '8').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

  it('Negative test - invalid adult number less 0', () => {
    cy.get(adults_box).should('be.visible')
    cy.get(adults_box).clear().type('0').should('have.value', '0', { force: true })
    cy.get(select_field).select('51', { force: true }).should('have.value', '51').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

  it('Negative test - invalid adult number  more 9', () => {
    cy.get(adults_box).should('be.visible')
    cy.get(adults_box).clear().type('10').should('have.value', '10', { force: true })
    cy.get(select_field).select('51', { force: true }).should('have.value', '51').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

  it('Negative test - invalid children number less 0', () => {
    cy.get(children_number_field).should('be.visible')
    cy.get(children_number_field).clear().type('-1').should('have.value', '-1', { force: true })
    cy.get(select_field).select('51', { force: true }).should('have.value', '51').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

  it('Negative test - invalid children number more than 10', () => {
    cy.get(children_number_field).should('be.visible')
    cy.get(children_number_field).clear().type('11').should('have.value', '11', { force: true })
    cy.get(select_field).select('51', { force: true }).should('have.value', '51').should('be.visible')
    cy.get(search_button).click()
    cy.get(error_message).should('be.visible')
  })

})