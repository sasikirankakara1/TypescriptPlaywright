import { test,expect } from "../fixtures/testFixture";

test.describe('Fixture Setup',()=>{
  
  test.beforeEach(async({google})=>{
   await google.navigate()
   
  })
  test('Lets run',async({google})=>{
  
    console.log(await google.getTitle())
    
    
    
  })
})