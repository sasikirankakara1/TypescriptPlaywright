import { Page } from '@playwright/test';
export class Google{

    readonly page:Page

    constructor(page:Page){
        this.page=page
    }
    async navigate(){
        await this.page.goto("https://www.google.com")
    }
    async getTitle(){
        return this.page.title()
    }
}