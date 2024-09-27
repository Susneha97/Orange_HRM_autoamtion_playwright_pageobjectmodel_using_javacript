//consolidate and copy all the objects

import { Login } from "./LoginPage"
import { MenuPage } from "./MenuPage"
import { Employee } from "./EmployeePage"
import { SearchEmployee } from "./SearchEmpPage"
import { Logout } from "./LogoutPage"

exports.POManager=
 class POManager
 {
    constructor(page)
    {
        this.page=page
        this.loginPage= new Login(this.page)
        this.menupage = new MenuPage(this.page)
        this.addEmp=new Employee(this.page)
        this.searchemployee=new SearchEmployee(this.page)
        this.LogOut=new Logout(this.page)
    }

    async launchwebsite()
    {
        await this.loginPage.gotowebsite()
    }

    async login(username,password)
    {
       await  this.loginPage.login(username,password)
    }


    async redirect_tosubmenu()
    {
       await this.menupage.navigateToPimModule()
       //return this.menupage
    }

    async addemp(empfname,emplname)
    {
       await this.addEmp.addEmployee(empfname,emplname)
    }

    async searchemp(empname,empid)
    {
       await this.searchemployee.searchemp(empname,empid)
    }

    async logout()
    {
       await this.LogOut.logout()
    }
 }

