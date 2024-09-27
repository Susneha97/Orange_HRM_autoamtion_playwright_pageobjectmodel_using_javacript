// Maintest.spec.js

const { test, expect } = require('@playwright/test');
const { POManager } = require('../Pages/POManager');


test("Login to the Application", async ({ page }) => {
    const pom = new POManager(page);
    
    // Launch the website
    await pom.launchwebsite();
    await pom.login("Admin","admin123")
    await pom.redirect_tosubmenu();
    await pom.addemp("Sneha","Jadar")
    await pom.searchemp("Sneha","0387")
    await pom.logout()
       
});