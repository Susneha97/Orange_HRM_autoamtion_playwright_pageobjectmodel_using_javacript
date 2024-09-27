exports.MenuPage=
class MenuPage
{
    constructor(page)
    {
        this.page=page;
        this.menubar=page.locator("//a//span")
    }

    async navigateToPimModule() {
        await this.menubar.first().waitFor();
        const menuItems = await this.menubar.allTextContents();
        console.log(menuItems)
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].includes('PIM')) {
                console.log(`The selected module is '${menuItems[i]}'`);
                await this.menubar.nth(i).click();
                await this.page.waitForTimeout(3000)
                break;
            }
        }
    }
}