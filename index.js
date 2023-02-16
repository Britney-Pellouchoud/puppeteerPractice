const puppeteer = require("puppeteer");
let page = null;
let browser = null;
browser = puppeteer.launch({ headless: false })

.then( async (browser) => {
	page = await browser.newPage();
	page.setViewport({
		width: 1280,
		height: 800,
		isMobile: false
	});
	page.goto("https://eberegit.github.io/Geo-Search/index.html", {
      waitUntil: "networkidle2",
    });

    // wait for the search input to have finished loading
    await page.waitFor('input[name="search-field');
    // wait two seconds before typing
    await page.waitFor(2000);
    // target the search input and type into the field
    await page.type('input[name="search-field"]', "Obudu Cattle Ranch, Obudu, Nigeria", {
        delay: 5,
      });
    // target and click the search button
    await page.click('input[name="submit-button"]');
	// wait five seconds
	await page.waitFor(5000);
    await browser.close();
})
.catch((error) => {
	console.log(error)
})