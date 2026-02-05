import { Google } from './../pages/google';
import {test as base} from '@playwright/test'

type myfixtures = {
    google:Google
}


export const test = base.extend<myfixtures>(
    {
        google:async({page},use)=>{
            const google = new Google(page)
            const titleName = google.getTitle()
            const currentUrl = google.getCurrentURL()
        }
    }
)


export {expect} from '@playwright/test'