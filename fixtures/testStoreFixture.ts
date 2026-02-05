import { test as base } from "@playwright/test";
import { TestStore } from "../pages/teststore";

type myFixtures = {
    store:TestStore
}


export const test = base.extend<myFixtures>({
    store:async({page},use)=>{
        const store = new TestStore(page)
        await store.navigate()
        use(store)
    }
})

export {expect}from '@playwright/test'