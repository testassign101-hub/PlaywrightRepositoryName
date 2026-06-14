const{expect} = require('@playwright/test')
class OrderPage{

constructor(page){
this.page = page
this.allorders = page.locator('tr.ng-star-inserted')

}

async checkOrdersPageTitle(){
    await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/myorders')
}
async OrderedIdIsAppearing(order){
    console.log("Inside method")
   const count = await this.allorders.count()

   for (let i =0 ; i<count ; i++){
    console.log("inside for loop")
    if (await this.allorders.nth(i).locator('th').textContent() === order){
        await this.allorders.nth(i).locator('button:has-text("View")').click()
        break
    }
   }
   

}
}
module.exports = {OrderPage}