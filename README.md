## Demo Workflow

This repository contains two approaches to Cypress test automation for an e-commerce website:

1. Without Page Object Model (POM) ( E-commerce.js)
   ➡️ Direct Cypress test with selectors, actions, and assertions written inside the test.
    * Features: Places an order, validates the cart, applies a promo code, and verifies the final thank-you message.

2. With Page Object Model (POM) ( E-commercePOM.js)
  ➡️ Uses POM structure for better maintainability and reusability.
    * Features: Automates login, product selection, cart validation, checkout, and order confirmation.

📦 Setup & Installation

1. Clone this repo
run: git clone https://github.com/trexaiimae/Cypress-Demo.git
run: cd Cypress-Demo

 2. Install dependencies
Make sure you have Node.js installed [(LTS version recommended]([url](https://nodejs.org/en))).
run: npm install

3. Verify Cypress is installed
run: npx cypress -v

▶️ Running the Tests

1. Open Cypress Test Runner (GUI)
run: npx cypress open

2. Select a spec you want to run
