import { expect } from '@playwright/test';
import { Google } from './../pages/google';
import {test as base} from '@playwright/test'

type myFixtures = {

    google:Google
}

export const test = base.extend<myFixtures>({
    google: async({page},use)=>{
        const google = new Google(page)
        use(google)
    }
})


export {expect} from  '@playwright/test'
