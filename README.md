# Cypress Demo Automation  

This repository showcases my Cypress automation skills across multiple testing approaches:

- UI (Direct Locators) – simple end-to-end tests  
- UI (Page Object Model) – scalable, maintainable framework design  
- API Testing – response validation, schema checks, and negative scenarios  


---

## 🔹 Without Page Object Model (POM) – `E-commerce.js`  
➡️ Demonstrates a straightforward Cypress test that covers order placement, cart validation, promo code application, and order confirmation. 

**Features:**  
- Places an order  
- Validates the cart  
- Applies a promo code  
- Verifies the final thank-you message

---

## 🔹 With Page Object Model (POM) – `E-commercePOM.js`  
➡️ Demonstrates a structured automation framework using fixtures, reusable methods, and page objects for better maintainability and scalability. 

**Features:**  
- Automates login  
- Product selection  
- Cart validation  
- Checkout and order confirmation

  ## 🔹 API Automation – `APIValidation.js`  
➡️ Demonstrates Cypress API testing with the Dog CEO API through structured request/response validation for maintainability and accuracy.

**Features:**  
- Sends a GET request to retrieve all dog breeds
- Validates status, headers, and response structure
- Asserts breed properties and sub-breed arrays
- Verifies breeds with no sub-breeds
- Negative scenarios with invalid endpoints and non-existent breeds



---

## 📦 Setup & Installation  

**1. Clone this repo**  
```bash
git clone https://github.com/trexaiimae/Cypress-Demo.git
cd Cypress-Demo
```
**2. Install Node.js [(LTS version recommended]([url](https://nodejs.org/en)))**  
- Make sure to select **“Add to PATH”** during installation (Windows). 
```bash
node -v
npm -v
```

**3. Install dependencies**  
```bash
npm install
```
**4. Install dependencies**  
```bash
npm install cypress
```

**5. Verify Cypress installation**  
```bash
npx cypress -v
```

▶️ Running the Tests

**Option 1: Run via Cypress GUI**  
```bash
npx cypress open
```
Then select the spec you want to run:
➡️E-commerce.js → Non-POM demo
➡️E-commercePOM.js → POM demo


**Option 2: Run directly in CLI (headless mode)**  
```bash
# Run non-POM demo
npx cypress run --spec "npx cypress run --spec "cypress/integration/E-commerce.js"

# Run POM demo
npx cypress run --spec "npx cypress run --spec "cypress/integration/E-commercePOM.js"

# Run API demo
npx cypress run --spec "npx cypress run --spec "cypress/integration/APITesting/APIValidation.js"

```

### 📌 Note  
This project uses a public demo site only as the application under test.
The test scripts were implemented and adapted with a Page Object Model framework and reusable functions to demonstrate Cypress automation practices.

