# 🛒 Swag Lab Automation Testing with Cypress

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Overview  
This project is an automated testing framework for the **Swag Lab** e-commerce website using **Cypress**. The framework ensures functional reliability, performance, and regression testing of key website features.  

## 🛠️ Technologies Used  
- **Cypress** – JavaScript end-to-end testing framework  
- **JavaScript** – Programming language  
- **Mocha & Chai** – Test framework and assertions  
- **Mochawesome** – Interactive test reporting  
- **Page Object Model (POM)** – Structured test organization  
- **GitHub Actions** – CI/CD pipeline integration  
- **Cross-Browser Testing** – Runs on Chrome & Firefox  
- **Data-Driven Testing** – External data source integration  

## 📌 Features  
✅ Automated UI testing for e-commerce functionalities  
✅ Data-driven testing using external files  
✅ Detailed test reports with screenshots using **Mochawesome**  
✅ Page Object Model (POM) for scalable test maintenance  
✅ Parallel execution for faster test runs  
✅ GitHub Actions integration for automated execution  
✅ Cross-browser testing (Chrome & Firefox)  
✅ Slack alerts for test execution results  (continueing)


## 📂 Project Structure  
```bash
📁 project-root  
┣ 📂 cypress  
┃ ┣ 📂 e2e # Test cases  
┃ ┣ 📂 fixtures # Test data  
┃ ┣ 📂 support # POM and custom commands  
┃ ┗ 📂 reports # Mochawesome reports  
┣ 📂 logs # Execution logs  
┣ 📜 cypress.config.js # Cypress configuration  
┣ 📜 package.json # Project dependencies  
┣ 📜 README.md (this file)  
```

## 🚀 Running Tests  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-repo/swag-lab-automation.git  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Run tests in headed mode:  
   ```bash  
   npx cypress open  
   ```  
4. Run tests in headless mode:  
   ```bash  
   npx cypress run  
   ```  

## 📊 Test Reporting  
- Test reports are generated using **Mochawesome** in the `reports` folder.  
- Reports include screenshots and logs for better debugging.  
  

## 🔄 CI/CD Integration  
- GitHub Actions workflow automatically triggers tests on code commits.  
- Test results are sent as Slack alerts. (continueing) 
- Supports parallel execution for efficient test runs.  

![image](https://github.com/user-attachments/assets/6939e10d-8751-4a18-ab14-b1939ecd7b7a)
![image](https://github.com/user-attachments/assets/be772987-bb2c-4665-9c3f-04533fcaadb1)


