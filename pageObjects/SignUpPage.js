const {expect} = require('@playwright/test')
class SignUpPage{

constructor(page){
this.page = page
this.firstName = page.getByPlaceholder('First Name')
this.lastName = page.getByPlaceholder('Last Name')
this.email = page.getByPlaceholder('email@example.com')
this.phoneNumber = page.getByPlaceholder('enter your number')
this.occupation = page.locator('.custom-select')
this.maleradioButton = page.getByRole('radio' , {name : 'Male', exact: true})
this.femaleradioButton = page.getByRole('radio' , {name : 'Female' , exact: true})
this.password = page.getByPlaceholder('Passsword', {exact: true})
this.confirmPassword = page.getByPlaceholder('Confirm Passsword', {exact:true})
this.ageCheckBox = page.locator('input[type="checkbox"]')
this.registerButton = page.locator('#login')
this.successfullmessage = page.getByText('Account Created Successfully')
this.errorMessage = page.locator('div.invalid-feedback div.ng-star-inserted')
}

async registerUser(firstName, lastName, email, phoneNumber , occupationValue, password1, password2){
    await this.firstName.fill(firstName)
    await this.lastName.fill(lastName)
    await this.email.fill(email)
    await this.phoneNumber.fill(phoneNumber.toString())
    await this.occupation.selectOption(occupationValue)
    await this.maleradioButton.click()
    await this.password.fill(password1)
    await this.confirmPassword.fill(password2)
    await this.ageCheckBox.check()
    await this.registerButton.click()
}
async clickregisterButton(){
    await this.registerButton.click()
}
async getErrorMessages(){
   await expect(this.errorMessage).toHaveCount(5)
    return await this.errorMessage.allTextContents()
}

}
module.exports = {SignUpPage}