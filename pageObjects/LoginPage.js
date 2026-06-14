const {test,expect}=require('@playwright/test')
class LoginPage{

constructor(page){
this.page = page;
this.username = page.getByPlaceholder('email@example.com')
this.password = page.getByPlaceholder('enter your passsword')
this.buttonLogin = page.getByRole('button' , {name:'Login'})
this.buttonRegister = page.locator('[routerlink = "/auth/register"]')
this.linkForgotPassword = page.getByRole('link' , {name: "Forgot password?"})
this.errorMessage = page.getByRole('alert', { name: 'Incorrect email or password.' })

}

async login (username , password) {
await this.username.fill(username)
await this.password.fill(password)
await this.buttonLogin.click()

}

async RegisterPage(){
await this.buttonRegister.click()
}

async ForgotPasswordPage(){
    await this.getForgotPasswordPage.click()
}
async errorMessageLogin(){
  await expect(this.errorMessage).toContainText('Incorrect');
}





}

module.exports= {LoginPage};