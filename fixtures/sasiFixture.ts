import { Google } from './../pages/google';
import {test as base} from '@playwright/test'

type myFixtures = {
    google:Google
}

export const test = base.extend<myFixtures>({
    google: async({page},use)=>{
        const google = new Google(page)
        const title = google.getTitle()
        const navigate = google.navigate()
        use(google)
    } 
})


export {expect} from '@playwright/test'