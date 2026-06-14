const{expect}=require('@playwright/test')
class CheckoutPage{

constructor(page){
this.page = page
this.inputSelectCountry = page.getByPlaceholder('Select Country')
this.autoSuggestionCountry = page.locator('section.ta-results button')
this.emailSelected = page.locator('div.user__name label')
this.expiryDate = page.locator('select.input')
this.cvv = page.locator('div.field input')
this.placeOrderButton = page.getByText('Place Order ')

}
async checkEmailSelected(expectedEmail){
    await expect(this.emailSelected)
        .toContainText(expectedEmail);
}
async addCountry(country,country1){
    await this.inputSelectCountry.pressSequentially(country)
    await expect(this.autoSuggestionCountry.first()).toBeVisible();
    await this.autoSuggestionCountry.getByText(country1, { exact: true }).click()
}
async addExpiryDate(date,month){
    await this.expiryDate.nth(0).selectOption(date.toString());
    await this.expiryDate.nth(1).selectOption(month.toString());
}
async addCVV(CVV){
    await this.cvv.nth(1).fill(CVV.toString())
}
async clickPlaceOrderbutton(){
    await this.placeOrderButton.click()
}


}

module.exports = {CheckoutPage}