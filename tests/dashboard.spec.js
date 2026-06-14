const {test,expect}=require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const {DashboardPage} = require('../pageObjects/DashboardPage')
const { CartPage } = require('../pageObjects/CartPage')
const { CheckoutPage } = require('../pageObjects/CheckoutPage')
const { ThankyouPage } = require('../pageObjects/ThankYouPage')
const { OrderPage } = require('../pageObjects/OrdersPage')


test('Verify Products are loading' , async ({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
const login = new LoginPage(page)
const data = require('../test-data/ParaArgu.json')

await login.login(data.username, data.password)
await page.waitForLoadState('networkidle')
const dashboard = new DashboardPage(page)
await dashboard.waitForProductsLoad()
const products = await dashboard.getProductNames()
console.log(products)
//now validate product list is not empty
await expect(products.length).toBeGreaterThan(0)
const bool = await dashboard.isproductDisplayed('ZARA COAT 3')
console.log(bool)
await expect(await dashboard.isproductDisplayed('ZARA COAT 3')).toBeTruthy()
await dashboard.addProduct(data.productName)
await dashboard.goToCart()
const cartPage = new CartPage(page)
const bool1 = await cartPage.isAddedItemPresent(data.productName)
//await page.screenshot()
console.log(bool1)
await expect(bool1).toBeTruthy()
await cartPage.gotoCheckoutPage()
//await page.pause()

const checkoutPage = new CheckoutPage(page)
await checkoutPage.checkEmailSelected('testassign101@gmail.com')
await checkoutPage.addCountry(data.country , data.country1)
await checkoutPage.addExpiryDate(data.cardexpirydate,data.cardexpirymonth)
await checkoutPage.addCVV(data.cvv)
await checkoutPage.clickPlaceOrderbutton()
const thankyoupage = new ThankyouPage(page)
await thankyoupage.ismessagedisplayed()
const order = await thankyoupage.getOrderId()
console.log(order)
await thankyoupage.gotoOrdersPage()
const ordersPage = new OrderPage(page)
await ordersPage.checkOrdersPageTitle();
await page.pause()
await ordersPage.OrderedIdIsAppearing(order);
await page.pause()



});