# Cypress Demo Automation  

This repository contains **two approaches to Cypress test automation** for an e-commerce website:  

---

## 🔹 Without Page Object Model (POM) – `E-commerce.js`  
➡️ Direct Cypress test with selectors, actions, and assertions written inside the test.  

**Features:**  
- Places an order  
- Validates the cart  
- Applies a promo code  
- Verifies the final thank-you message  

---

## 🔹 With Page Object Model (POM) – `E-commercePOM.js`  
➡️ Uses the **POM structure** for better maintainability and reusability.  

**Features:**  
- Automates login  
- Product selection  
- Cart validation  
- Checkout and order confirmation  

---

## 📦 Setup & Installation  

**1. Clone this repo**  
```bash
git clone https://github.com/trexaiimae/Cypress-Demo.git
cd Cypress-Demo
```

**2. Install dependencies**  
```bash
npm install
```

**3. Verify Cypress installation**  
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
npx cypress run --spec "cypress/e2e/E-commerce.js"

# Run POM demo
npx cypress run --spec "cypress/e2e/E-commercePOM.js"
```

