import {test,expect,Locator} from "@playwright/test"

//*using Xpath
/*
test("using of synamic xpath ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for( let i =1; i<=5; i++){
   const button = page.locator("//button[text()='START' or text()='STOP']");
    await button.click();
    await page.waitForTimeout(2000);
}*/

//using Css selector
test("using of synamic xpath ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for( let i =1; i<=5; i++){
   const button = page.locator('button[name="start"], button[name="stop"]');
    await button.click();
    await page.waitForTimeout(2000);
    }


}
)
