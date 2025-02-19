const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load Mochawesome report
  await page.goto(`file://${process.cwd()}/cypress/reports/mochawesome.html`, {
    waitUntil: "networkidle0",
  });

  // Generate PDF
  await page.pdf({ path: "cypress/reports/mochawesome.pdf", format: "A4" });

  await browser.close();
  console.log("✅ PDF report generated successfully.");
})();
