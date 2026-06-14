class DashboardPage{

constructor(page){
this.page = page
this.products = page.locator('.card-body')
this.productsNames = page.locator('.card-body b')
this.cartLink = page.locator('[routerlink="/dashboard/cart"]')

}
async waitForProductsLoad(){
  await this.products.first().waitFor();
}
async getProductNames(){

    return await this.productsNames.allTextContents()
}
async isproductDisplayed(productName){

  const Products = await this.getProductNames()
  return Products.includes(productName)
}


async addProduct(productName){
  
  await this.products.filter({hasText: productName}).getByRole('button', { name: 'Add To Cart' }).click();
}

async goToCart(){
  await this.cartLink.click()

}
}
module.exports ={DashboardPage}