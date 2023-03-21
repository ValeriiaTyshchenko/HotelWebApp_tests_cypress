///<reference types = "Cypress"/>

describe('navigate to main page', () => {


  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   //returning false here prevents Cypress from failing the test
  //   return false
  // })

const hotel_menu_button = '[class="hotels"]';
const guides_menu_button = '[class="guides js-list-guides"][href="/en-US/Guide/List?DestinationId=2"]';
const tours_menu_button = '[class="tours js-list-tours"]';
const things_to_do_menu_button = '[class="tours attraction-link"]';
const logo = '[class="logo"]';
const search_hotel_form = '[class="form-centered"]';
const guides_page_banner = '[class="col-lg-9 col-md-10 col-sm-12"]';
const tour_page_banner = '[class="col-9"]';
const thingsToDo_page_banner = '[class="attractions-search__head-title"]';
const login_button = 'div.nav-access > [href="/en-US/Account/Login"]';
const signup_button = 'div.nav-access > [href="/en-US/Account/Register"]';
const login_page = '[class="login-headline"]';
const signin_page = '[class="registration-headline"]';

  before(() => {
    cy.visit(' https://www.accesstravel.com/en-US/Home/Index')
  })
  
  beforeEach(() => {
    cy.visit(' https://www.accesstravel.com/en-US/Home/Index')
  })
  

  it('verification of the main page', () => {
    cy.get(hotel_menu_button).should('be.visible').should('have.text', " Hotels" )
    cy.get(guides_menu_button).should('be.visible').invoke('val', "Guides" )
    cy.get(tours_menu_button).should('be.visible').invoke('val', "Tours" )
    cy.get(things_to_do_menu_button).should('be.visible').invoke('val', "Things to do" )
  })

  it('clicking on the Hotel button', () => {
    cy.get(hotel_menu_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(search_hotel_form).should('be.visible').invoke('val', 'Find Your Inclusive Hotel!')
   
  })

  it('clicking on the Guides button', () => {
    cy.get(guides_menu_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Guide/List?DestinationId=2')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(guides_page_banner).should('be.visible').invoke('val', ' Inclusive Travel Companions, Advisors and Guides')
   
  })

  it('clicking on the Tours button', () => {
    cy.get(tours_menu_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Tour/List?DestinationId=2')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(tour_page_banner).should('be.visible').invoke('val', ' Discover amazing accessible to all tours and services ')
   
  })

  it('clicking on the Things to Do button', () => {
    cy.get(things_to_do_menu_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(thingsToDo_page_banner).should('be.visible').invoke('val', 'Inclusive attractions and tours')
   
  })

  it('clicking on the Login button', () => {
    cy.get(login_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Account/Login')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(login_page).should('be.visible').invoke('val', 'Sign in')
   
  })

  it('clicking on the Signin button', () => {
    cy.get(signup_button).click()
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Account/Register')
    cy.get(logo).should('be.visible').invoke('val', 'Access Travels')
    cy.get(signin_page).should('be.visible').invoke('val', 'Registration')
   
  })


})