// const puppeteer = require("puppeteer");
// const fs = require("fs");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Load Mochawesome report
  // await page.goto(`file://${process.cwd()}/cypress/reports/mochawesome.html`, {
  //   waitUntil: "networkidle0",
  // });

//   // Generate PDF
//   await page.pdf({ path: "cypress/reports/mochawesome.pdf", format: "A4" });

//   await browser.close();
//   console.log("✅ PDF report generated successfully.");
// })();

import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
// await page.goto('https://developer.chrome.com/');
await page.goto(`file://${process.cwd()}/cypress/reports/index.html`, {
  waitUntil: "networkidle0",
})
// Set screen size.
await page.setViewport({width: 1080, height: 1024});

// Type into search box.
await page.locator('.devsite-search-field').fill('automate beyond recorder');

// Wait and click on first result.
await page.locator('.devsite-result-item-link').click();

// Locate the full title with a unique string.
const textSelector = await page
  .locator('text/Customize and automate')
  .waitHandle();
const fullTitle = await textSelector?.evaluate(el => el.textContent);

// Print the full title.
console.log('The title of this blog post is "%s".', fullTitle);

await browser.close();