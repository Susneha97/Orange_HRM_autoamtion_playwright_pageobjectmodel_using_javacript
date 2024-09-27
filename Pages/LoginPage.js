//Login to the OrangeHRM site.

exports.Login=
class Login
{
    constructor(page)
    {
        this.page=page;
        this.username=page.locator("//input[@name='username']")
        this.password=page.locator("//input[@name='password']")
        this.login_button=page.locator("//button[@type='submit']")
    }

    async gotowebsite()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username,password)
    {
        await (this.username).fill(username)
        await (this.password).fill(password)
        await (this.login_button).click();
    }
}