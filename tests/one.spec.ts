import { test,expect } from "@playwright/test";
import { Google } from "../pages/google";

test.only('testings',async({page})=>{
    const google = new Google(page)
   await google.navigate()
   const titleName = google.getTitle()
   console.log(await titleName)
})