import {Locator, Page} from '@playwright/test'

export class TestStore{


    readonly loginName:Locator
    constructor(readonly page:Page){
        this.loginName = this.page.locator("#loginFrm_loginname")
    }

    async navigate(){
        await this.page.goto("/")
    }
    async getTitle():Promise<string>{
        return this.page.title()
    }
    async loginOrRegister():Promise<void>{
        await this.page.getByRole('link',{name:'Login or register'}).click()
    }
    
    async login(lname:string):Promise<void>{
        this.loginName.fill(lname)
    }
    async clickSpecificTab(text:string){
        const prod = this.page.locator("a")
        await prod.filter({hasText:text}).first().click()

    }
    
     
}

