exports.SearchEmployee=
class SearchEmployee
{
    constructor(page)
    {
        this.page=page;
        this.emplist=page.locator("//li[@class='oxd-topbar-body-nav-tab --visited']")
        this.EmpName = page.getByPlaceholder('Type for hints...')
        this.Empid = page.getByRole('textbox')
        this.search_btn=page.locator("//button[@type='submit']")
    }


    async searchemp(empname,empid)
    {
        await this.emplist.click()
        await this.EmpName.first().fill(empname)
        await this.Empid.nth(2).fill(empid)
        await this.search_btn.click();
        await this.page.waitForTimeout(5000)
        console.log(`The Employee is ${empname} Whose Employee id is ${empid}`)
    }
}