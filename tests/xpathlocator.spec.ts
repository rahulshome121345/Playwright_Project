import { Expect,test,Locator, expect } from "@playwright/test"
test("Xpath Locators", async({page})=>{
    // await page.goto("https://demowebshop.tricentis.com");
    // const relative_logo=  page.locator("//img[@alt='Tricentis Demo Web Shop']");
    // await expect(relative_logo).toBeVisible();



    //* contains method to find out group of elemnt 
await page.goto("https://demowebshop.tricentis.com/")
const products = page.locator("//h2/a[contains(@href,'computer')]");
const totalProducts = await  products.count();
console.log("total number od computer product",totalProducts );
expect(totalProducts).toBeGreaterThan(0);
console.log("1st computer name: ",await products.nth(0).textContent()); // exact same as get text method in selenium 


console.log("last  computer name: ",await products.last().textContent());
const allproductcontents: String[] =await products.allTextContents();
for(let pt of allproductcontents){
    console.log(pt)
}



}
)