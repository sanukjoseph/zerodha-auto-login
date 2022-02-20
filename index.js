const puppeteer = require("puppeteer");
const KiteConnect = require('kiteconnect').KiteConnect;
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function zerodhaLogin(ApiKey,SecretKey,UserId,Password,Pin) {
    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(
          `https://kite.trade/connect/login?api_key=${ApiKey}&v=3`
        );
        await sleep(2000);
        await page.type("input[type=text]", UserId);
        await page.type("input[type=password]", Password);
        await page.keyboard.press("Enter");
        await sleep(2000);
        await page.focus("input[type=text]").then((value) => console.log(value));
        await page.keyboard.type(Pin);
        await page.keyboard.press("Enter");
        await page.waitForNavigation();
        const reqUrl = page.url();
        console.log("Page URL:", page.url());
        const requestToken = new URL(reqUrl).searchParams.get('request_token');
        console.log("Request Token: ", requestToken);
        await browser.close();
        try{
          const kc = new KiteConnect({
            api_key: ApiKey,
          });
          const response = await kc.generateSession(requestToken, SecretKey);
          const accessToken = response.access_token;
          console.log("Access Token: ",accessToken);
        }catch (e){
          console.error(e);
        }
      })();
}
module.exports = zerodhaLogin
