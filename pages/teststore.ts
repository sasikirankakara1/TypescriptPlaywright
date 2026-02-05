import {Page} from '@playwright/test'

export class TestStore{


    constructor(private readonly page:Page){}

    async navigate(){
        await this.page.goto("/")
    }
    async getTitle():Promise<string>{
        return this.page.title()
    }
    async loginOrRegister():Promise<void>{
        await this.page.getByRole('link',{name:'Login or register'}).click()
    }
}

