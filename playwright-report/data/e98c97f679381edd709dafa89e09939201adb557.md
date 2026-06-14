# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Error validation message
- Location: tests/login.spec.js:38:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('div.invalid-feedback div.ng-star-inserted')
Expected: 5
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('div.invalid-feedback div.ng-star-inserted')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e29]:
      - heading "Register" [level=1] [ref=e30]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e34]:
            - generic [ref=e35]: First Name
            - textbox "First Name" [ref=e36]
            - generic [ref=e38]: "*First Name is required"
          - generic [ref=e40]:
            - generic [ref=e41]: Last Name
            - textbox "Last Name" [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]: Email
            - textbox "email@example.com" [ref=e46]
            - generic [ref=e48]: "*Email is required"
          - generic [ref=e49]:
            - generic [ref=e50]: Phone Number
            - textbox "enter your number" [ref=e51]
            - generic [ref=e53]: "*Phone Number is required"
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]: Occupation
            - combobox [ref=e57]:
              - option "Choose your occupation" [disabled] [selected]
              - option "Doctor"
              - option "Student"
              - option "Engineer"
              - option "Scientist"
          - generic [ref=e58]:
            - generic [ref=e59]: Gender
            - generic [ref=e60]:
              - radio "Male" [ref=e61]
              - text: Male
            - generic [ref=e62]:
              - radio "Female" [ref=e63]
              - text: Female
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Password
            - textbox "Passsword" [ref=e67]
            - generic [ref=e69]: "*Password is required"
          - generic [ref=e70]:
            - generic [ref=e71]: Confirm Password
            - textbox "Confirm Password" [ref=e72]:
              - /placeholder: Confirm Passsword
            - generic [ref=e74]: Confirm Password is required
        - generic [ref=e75]:
          - checkbox [ref=e77]
          - generic [ref=e78]: I am 18 year or Older
          - generic [ref=e80]: "*Please check above checkbox"
        - button "Register" [active] [ref=e81] [cursor=pointer]
      - paragraph [ref=e82] [cursor=pointer]: Already have an account? Login here
  - generic [ref=e83]:
    - heading "Why People Choose Us?" [level=1] [ref=e86]
    - generic [ref=e87]:
      - generic [ref=e88]:
        - generic [ref=e90]: 
        - generic [ref=e91]:
          - heading "3546540" [level=1]
          - paragraph [ref=e92]: Successfull Orders
      - generic [ref=e93]:
        - generic [ref=e95]: 
        - generic [ref=e96]:
          - heading "37653" [level=1]
          - paragraph [ref=e97]: Customers
      - generic [ref=e98]:
        - generic [ref=e100]: 
        - generic [ref=e101]:
          - heading "3243" [level=1]
          - paragraph [ref=e102]: Sellers
    - generic [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e106]: 
        - generic [ref=e107]:
          - heading "4500+" [level=1]
          - paragraph [ref=e108]: Daily Orders
      - generic [ref=e109]:
        - generic [ref=e111]: 
        - generic [ref=e112]:
          - heading "500+" [level=1]
          - paragraph [ref=e113]: Daily New Customer Joining
```

# Test source

```ts
  1  | const {expect} = require('@playwright/test')
  2  | class SignUpPage{
  3  | 
  4  | constructor(page){
  5  | this.page = page
  6  | this.firstName = page.getByPlaceholder('First Name')
  7  | this.lastName = page.getByPlaceholder('Last Name')
  8  | this.email = page.getByPlaceholder('email@example.com')
  9  | this.phoneNumber = page.getByPlaceholder('enter your number')
  10 | this.occupation = page.locator('.custom-select')
  11 | this.maleradioButton = page.getByRole('radio' , {name : 'Male', exact: true})
  12 | this.femaleradioButton = page.getByRole('radio' , {name : 'Female' , exact: true})
  13 | this.password = page.getByPlaceholder('Passsword', {exact: true})
  14 | this.confirmPassword = page.getByPlaceholder('Confirm Passsword', {exact:true})
  15 | this.ageCheckBox = page.locator('input[type="checkbox"]')
  16 | this.registerButton = page.locator('#login')
  17 | this.successfullmessage = page.getByText('Account Created Successfully')
  18 | this.errorMessage = page.locator('div.invalid-feedback div.ng-star-inserted')
  19 | }
  20 | 
  21 | async registerUser(firstName, lastName, email, phoneNumber , occupationValue, password1, password2){
  22 |     await this.firstName.fill(firstName)
  23 |     await this.lastName.fill(lastName)
  24 |     await this.email.fill(email)
  25 |     await this.phoneNumber.fill(phoneNumber.toString())
  26 |     await this.occupation.selectOption(occupationValue)
  27 |     await this.maleradioButton.click()
  28 |     await this.password.fill(password1)
  29 |     await this.confirmPassword.fill(password2)
  30 |     await this.ageCheckBox.check()
  31 |     await this.registerButton.click()
  32 | }
  33 | async clickregisterButton(){
  34 |     await this.registerButton.click()
  35 | }
  36 | async getErrorMessages(){
> 37 |    await expect(this.errorMessage).toHaveCount(5)
     |                                    ^ Error: expect(locator).toHaveCount(expected) failed
  38 |     return await this.errorMessage.allTextContents()
  39 | }
  40 | 
  41 | }
  42 | module.exports = {SignUpPage}
```