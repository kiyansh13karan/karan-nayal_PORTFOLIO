const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  page.on('requestfailed', req => console.log('REQUEST FAILED:', req.url(), req.failure()?.errorText));

  try {
    await page.goto('http://localhost:3001');
    await new Promise(r => setTimeout(r, 5000));
  } catch (e) {
    console.error('Error navigating:', e);
  }
  await browser.close();
})();
