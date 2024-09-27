exports.Employee=
class Employee
{
    constructor(page)
    {
        this.page=page;
        this.add_emp=page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
        this.emp_fname=page.locator("//input[@name='firstName']")
        this.emp_lname=page.locator("//input[@name='lastName']")
        this.emp_save_btn=page.locator("//button[@type='submit']")
        this.verifyusermsg=page.locator("//p[@class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']")

    }



    async addEmployee(empfname,emplname)
    {
        await this.add_emp.click();
        await this.page.waitForTimeout(3000)
        await (this.emp_fname).fill(empfname)
        await (this.emp_lname).fill(emplname)
        await this.emp_save_btn.click();
        console.log(`The user ${empfname} is`,await this.verifyusermsg.textContent());
        await this.page.waitForTimeout(7000)

    }
}