import {test as base} from '@playwright/test'
import { Google } from '../pages/google'

type myFixtures = {
    google:Google
}

export const test = base.extend<myFixtures>({
    google: async ({page},use)=>{
        const google = new Google(page)
        await google.navigate()
        await use(google)
    }
})


export {expect} from '@playwright/test'