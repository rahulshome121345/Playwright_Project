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



//* Writing xpath using starts with

const compprod = page.locator("//h2//a[starts-with(@href,'/build')]");
const totalprodcount = await compprod.count();
console.log("total product: ",totalprodcount);


//* write xpaths using text
const reglink = page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();


//* write xpath using last
const lastitems = page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitems).toBeVisible();
 console.log("last item is : ", await lastitems.textContent())


 //* write xpath using position
 const lastitem = page.locator("//div[@class='column follow-us']//li[position()=3]");
 console.log("last item of the page is : ", await lastitem.textContent());
 await expect(lastitem).toBeVisible();
}
)