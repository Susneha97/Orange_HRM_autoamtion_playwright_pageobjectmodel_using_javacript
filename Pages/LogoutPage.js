exports.Logout=
class Logout
{
    constructor(page)
    {
        this.page=page;
        this.profilemenu=page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']")
        this.logout_btn=page.locator("//a[normalize-space()='Logout']");
    }



    async logout()
    {
        await this.profilemenu.click();
        await this.logout_btn.click();
        console.log("The user is logged out successfully")
        await this.page.waitForTimeout(3000)
    }
}