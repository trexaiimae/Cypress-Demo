This repository contains two approaches to Cypress test automation for an e-commerce website:

Without Page Object Model (POM) – E-commerce.js

➡️ Direct Cypress test with selectors, actions, and assertions written inside the test.

Features: Places an order, validates the cart, applies a promo code, and verifies the final thank-you message.

With Page Object Model (POM) – E-commercePOM.js

➡️ Uses POM structure for better maintainability and reusability.

Features: Automates login, product selection, cart validation, checkout, and order confirmation.

📦 Setup & Installation

1. Clone this repo

git clone https://github.com/trexaiimae/Cypress-Demo.git
cd Cypress-Demo


2. Install dependencies
Make sure you have Node.js installed (LTS version recommended).

npm install


3. Verify Cypress is installed

npx cypress -v

▶️ Running the Tests

1. Open Cypress Test Runner (GUI)

npx cypress open


Then select the spec you want to run.

2. Run directly in CLI (headless mode)

# Run non-POM demo
npx cypress run --spec "cypress/e2e/E-commerce.js"

# Run POM demo
npx cypress run --spec "cypress/e2e/E-commercePOM.js"
