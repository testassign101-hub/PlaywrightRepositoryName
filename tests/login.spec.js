const{test, expect} =require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const data = require('../test-data/ParaArgu.json')
const { SignUpPage } = require('../pageObjects/SignUpPage')

test ('Valid Login' , async ({page})=>{
 console.log("Hello Valid Login")   
await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
const loginPage = new LoginPage(page)

await loginPage.login( data.username, data.password)
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login')


})

test('Invalid Login' , async ({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
const loginPage = new LoginPage(page)
await loginPage.login(data.username , data.incorrectPassword)
await loginPage.errorMessageLogin()




})
test('SignUp user' , async ({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
const loginPage = new LoginPage(page)
await loginPage.RegisterPage()
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/register')
const signUpPage = new SignUpPage(page)
await signUpPage.registerUser(data.firstName, data.lastName, data.email, data.phoneNumber , data.occupationValue, data.password1, data.password2)
await expect(signUpPage.successfullmessage).toBeVisible()
await page.pause()

})

test('Error validation message' , async ({page})=> {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    const loginPage = new LoginPage(page)
    await loginPage.RegisterPage()
    const signUpPage = new SignUpPage(page)
    await signUpPage.clickregisterButton()
    const actual= await signUpPage.getErrorMessages()
    console.log(actual)
    
})

