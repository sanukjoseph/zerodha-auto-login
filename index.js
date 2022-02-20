const puppeteer = require("puppeteer");
const KiteConnect = require('kiteconnect').KiteConnect;
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function zerodhaLogin(ApiKey,SecretKey,UserId,Password,Pin) {
    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const credentials = {
          apiKey: ApiKey,
          apiSecret: SecretKey,
          userId: UserId,
          password: Password,
          pin: Pin,
        }
        await page.goto(
          `https://kite.trade/connect/login?api_key=${credentials.apiKey}&v=3`
        );
        await sleep(2000);
        await page.type("input[type=text]", credentials.userId);
        await page.type("input[type=password]", credentials.password);
        await page.keyboard.press("Enter");
        await sleep(2000);
        await page.focus("input[type=text]").then((value) => console.log(value));
        await page.keyboard.type(credentials.pin);
        await page.keyboard.press("Enter");
        await page.waitForNavigation();
        const reqUrl = page.url();
        console.log("Page URL:", page.url());
        const requestToken = new URL(reqUrl).searchParams.get('request_token');
        console.log("Request Token: ", requestToken);
        await browser.close();
        try{
          const kc = new KiteConnect({
            api_key: credentials.apiKey,
          });
          const response = await kc.generateSession(requestToken, credentials.apiSecret);
          const accessToken = response.access_token;
        
          console.log("Access Token: ",accessToken);
        }catch (e){
          console.error(e);
        }
      })();
}
module.exports = zerodhaLogin
