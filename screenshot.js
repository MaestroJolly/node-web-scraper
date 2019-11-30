const puppeteer = require('puppeteer');
const chalk = require('chalk');
var fs = require('fs');

// MY OCD of colorful console.logs for debugging... IT HELPS
const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
    try {
        // open the headless browser
        var browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://news.ycombinator.com/');
        await page.screenshot({path: 'example.png'});
        // await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
        // await page.pdf({path: 'hn.pdf', format: 'A4'});

        await browser.close();

        console.log(success('Browser Closed'));
    } catch (error) {
        // Catch and display errors
        console.log(error(err));
        await browser.close();
        console.log(error('Browser Closed'));
    }
})();