This package is for automating zerodha login & access token generation on an individual basis.

This package is focused on the algo trading, and requires TOTP apps **6 digit authentication code** for Kite 2FA.

If your account is not TOTP enabled, follow this link:
https://support.zerodha.com/category/your-zerodha-account/login-credentials/login-credentials-of-trading-platforms/articles/time-based-otp-setup

Requirements:

        API key, 
        Secret Key, 
        ClientID, 
        Client_Password 
        TOTP (6 digit pin generated from Any Authentication Apps )

***Note only TOTP pin should be passed as a prop and not user pin for login..***

After installing package..

         import zerodhaLogin from "zerodha-auto-login" 
                              or 
         const zerodhaLogin = require("zerodha-auto-login")

then :

        const login = zerodhaLogin(
         "Public API Key",
         "Secret API Key",
         "Client ID",
         "Client Password",
         "TOTP"
         )

         console.log(login)


Pass props to the function based on above pattern only. Every time you call this function, a chromium browser will open and login to zerodha and return access token to your console.



Output -

         Page URL : https://*****your-domain-name*****
         Request Token : `*************Request Token*************`
         Access Token : `*************Access Token*************`


Currently used versions : 

         Node.js : v17.4.0
         Puppeteer : ^13.3.2
         Kite Connect : ^4.0.0
