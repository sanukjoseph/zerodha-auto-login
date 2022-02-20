This package is for automating zerodha login & access token generation

This package is focused on the algo trading, and requires TOTP apps **6 digit authentication code** for Kite 2FA.

//if your account is not TOTP enabled, follow this link:
https://support.zerodha.com/category/your-zerodha-account/login-credentials/login-credentials-of-trading-platforms/articles/time-based-otp-setup

This package use's : 
kiteconnect@latest // The official Javascript node client for communicating with the Kite Connect API.
puppeteer //for automation process.

you have to pass **API key, Secret Key, ClientID, Client_Password and TOTP** ( Generated from Any Authentication Apps )

***Note only TOTP pin should be passed as a prop and not user pin for login..***

After installing package..

                   import zerodhaLogin from "zerodha-auto-login" 
                                        or 
                   const zerodhaLogin = require("zerodha-auto-login")

                   const login = zerodhaLogin(
                    "API",
                    "Secret API Key",
                    "Client ID",
                    "Client Password",
                    "TOTP"
                    )

                    console.log(login)

//pass props to the function based on above pattern only..
//every time you call this function, a chromium browser will open and login to zerodha and return access token to your console.

console.log(login)

Output -

                    Page URL : https://*****your-domain-name*****
                    Request Token : `*************Request Token*************`
                    Access Token : `*************Access Token*************`


