const {expect} = require('@playwright/test')
class ThankyouPage {

constructor(page){

    this.page = page
    this.thankYoumessage = page.getByText(' Thankyou for the order. ')
    this.orderId = page.locator('tr.ng-star-inserted td.em-spacer-1 label')
    this.orderButton = page.getByRole('button' , {name: 'ORDERS'})
}

async ismessagedisplayed(){
    await expect(this.thankYoumessage).toBeVisible()
}

async getOrderId(){
   const text= await this.orderId.textContent()
   const OrderID=text.replaceAll('|', '').trim()
   return OrderID
}
async gotoOrdersPage(){
    await this.orderButton.click()
}

}
module.exports = {ThankyouPage}