import {test,expect} from '../fixtures/testStoreFixture'

test.describe('Start launch',()=>{
    test.beforeEach(async({store})=>{
        await store.navigate()
    })
    test('Lets watch',async({store})=>{
        console.log(await store.getTitle())
        await store.loginOrRegister()
        await store.page.pause()
    })
})