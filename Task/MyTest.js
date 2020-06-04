describe("my main1 suite ",()=>{
    
    it("my main1 spec",async() =>{ 
       //var emp=["standard_user","problem_user","performance_glitch_user"];
       
       const data=require("./Values.json")
        var i=0;
        for(i=0;i<data.length;i++){
            await browser.url("https://www.saucedemo.com/");
            var element=await browser.$('//input[@id="user-name"]');
            await element.waitForExist(2000);
            await element.setValue(data[i].username);
            var element=await browser.$('//input[@id="password"]');
            await element.waitForExist(5000);
            await element.setValue(data[i].password);
            var element=await browser.$('//input[@type="submit"]');
            await element.click();
            var element=await browser.$("(//button[text()='ADD TO CART'])[1]");
            await element.click();
            var element=await browser.$("//div[@id='shopping_cart_container']//a");
            await element.click();
            var element=await browser.$('//a[text()="CHECKOUT"]');
            await element.click();
            var element=await browser.$('//input[@id="first-name"]');
            await element.waitForExist(2000);
            await element.setValue(data[i].firstname);
            var element=await browser.$('//input[@id="last-name"]');
            await element.waitForExist(2000);
            await element.setValue(data[i].lastname);
            var element=await browser.$('//input[@id="postal-code"]');
            await element.waitForExist(2000);
            await element.setValue(data[i].postalcode);
            var element=await browser.$("//input[@value='CONTINUE']");
            await element.click();
            var element=await browser.$('//a[text()="FINISH"]');
            await element.click();
          
           
          }
        
        
    })

})