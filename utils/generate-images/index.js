import puppeteer from 'puppeteer-core';

(async () => {
  const browser = await puppeteer.launch({
      executablePath: '/usr/local/bin/chromium',
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/blog/dont-wait-for-the-perfect-topic');
  await page.screenshot({ path: './example.webp', type: 'webp' });

  await browser.close();
})();