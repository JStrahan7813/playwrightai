// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from "@zerostep/playwright"

// Test to check the discount price of Tomato on the offers page
test('zerostep example 1 Clicks on Everway website and gets header text on pricing page', async ({ page }) => {
  const aiArgs = { page, test }
  //await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  await page.goto('https://texthelp.com/resources/inclusive-education/supporting-dyslexia-guide/?utm_campaign=K-12:-Demand-Gen-Schools|INT-EDU-BRAND-Supporting-Dyslexia-ENG-2025-FEB&utm_medium=display&utm_source=Google&utm_content=uk-search&utm_campaign=&gad_source=1&gad_campaignid=22690405904&gbraid=0AAAAADM0cgPhj4wIclYssCwHX1jlQWqGV&gclid=CjwKCAjwsZPDBhBWEiwADuO6y353Ml08Zk2V56sLkYavdJDXIQnFzQ43BH-9N5sU7ry2vtpblS32oRoCjSEQAvD_BwE');
  // Use AI to extract the discount price of Tomato
  await ai('click Accept button', aiArgs)
  //await page.waitForTimeout(8_000)
  await ai('click on the link for pricing', aiArgs)
  //await page.waitForTimeout(8_000)
  //await ai('click on Read&Write', aiArgs)
  //await page.pause()
  //await page.waitForTimeout(8_000)
  const salesText = await ai('Get the header text', aiArgs)
  console.log(salesText);


  //await page.evaluate(() => window.scrollTo(0, 100));
  //const text = await ai("What is the Discount Price of Tomato", aiArgs);
  //expect(text).toEqual("26");

  // Example of checking the page title (commented out)
  // await expect(page).toHaveTitle(/Playwright/);
});

// Test to get header text from zerostep.com and search it on Google
test('zerostep example2 gets header text from zerostep website and searches for it on Google', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // Prepare AI arguments
  const aiArgs = { page, test }
  // Use AI to get the header text from the page
  const headerText = await ai('Get the header text', aiArgs)
  console.log(headerText);

  // Go to Google and accept cookies
  await page.goto('https://google.com/')
  await page.click("//*[@id='L2AGLb']")

  // Use AI to type the header text in the search box and press enter
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
})

// Test to automate login on ecommerce website
test('zerostep example3 logins to ecommerce website', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

  // Prepare AI arguments
  const aiArgs = { page, test }  
  // Use AI to fill in login credentials and sign in
  await ai('Enter "rahulshettyacademy" as Username', aiArgs)
  await ai('Enter "learning" as Password', aiArgs)
  await ai('click terms and conditions', aiArgs)
  //await ai('Click Sign In', aiArgs)
  await page.locator('#signInBtn').click();
  await page.waitForTimeout(8_000)
  //await page.pause()

  // Scroll to the bottom of the page
  //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Use AI to add "iphone X" to cart and proceed to checkout
  //await ai('click on the add button at the bottom of the page to the left', aiArgs)
  //await page.getByText('Add').click();
  //await page.pause()
  //await page.evaluate(() => window.scrollTo(0, 0));
  //await page.pause()
  //await ai('Go to the checkout page', aiArgs)
  //await page.pause()
  //await ai('click checkout button', aiArgs)
  //await page.pause()
  //await ai('Enter ind in input', aiArgs)
  //await page.waitForTimeout(8_000)
  //await ai('Click India link', aiArgs)
  //await ai('Select the checkbox', aiArgs)
  //await ai('Click Purchase button', aiArgs)

  // Use AI to confirm the success message is displayed
  //const bool = await ai('Confirm that success confirmation text is displayed', aiArgs)
  //expect(bool).toEqual(true)
});

