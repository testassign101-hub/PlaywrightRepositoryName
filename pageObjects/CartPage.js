class CartPage{

constructor(page){
this.page = page
//this.addedItem = page.getByRole('heading', { name: productName })
this.cartProducts = page.locator('h3');
this.checkoutbutton = page.getByRole('button', {name :'Checkout'})
}
async isAddedItemPresent(productName){
return await this.cartProducts.filter({ hasText: productName }).isVisible();
}

async gotoCheckoutPage(){
    await this.checkoutbutton.click()
}

}

module.exports = {CartPage}