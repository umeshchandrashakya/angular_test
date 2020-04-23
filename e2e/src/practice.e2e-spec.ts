import { browser, element, by } from "protractor";

describe("practice website test", function () {
  browser.get("https://rahulshettyacademy.com/angularpractice/");
  element(by.name("name")).sendKeys("umesh chandra");
  element(by.css("input[name='email']")).sendKeys("ucs9821@gmail.com");
  element(by.id("exampleInputPassword1")).sendKeys("umesh9821@");
  element(by.css("input[type='checkbox']")).click();
  element(
    by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")
  ).click();
  element
    .all(by.name("inlineRadioOptions"))
    .get(1)
    .click();
  element(by.buttonText("Submit"))
    .click()
    .then(function () {
      element(by.css("div[class*='success']"))
        .getText()
        .then(function (text) {
          console.log(text);
        });
    });
  browser.sleep(5000);
  element(by.name("name")).clear();
  element(by.name("name"))
    .sendKeys("m")
    .then(function () {
      element(by.css("[class='alert alert-danger']"))
        .getText()
        .then(function (text) {
          console.log(text);
        });
    });
  browser.sleep(5000);

  function selectItem(product) {

    //take four carts into list
    //go through each index in list and first get the title of each cart
    //if title is equal = desired title then in that index i will select add button
    element.all(by.tagName("app-card")).each(function (item) {
      item.element(by.css("h4 a")).getText().then(function (text) {
        if (text == product) {
          //click on cart add button
          item.element(by.css("button[class*='btn-info']")).click();
        }
      });
    });
  }
  element(by.linkText("Shop")).click();
  selectItem("Samsung Note 8");
  selectItem("iphone X");

  element(by.partialLinkText("Checkout")).getText().then(function (text) {
    var res = text.split("(")
    expect(res[1].trim().charAt(0)).toBe("2");
  })
  element(by.partialLinkText("Checkout")).click();
  //browser.sleep(5000);

  //var tabledata = element.all(by.tagName("table"));

  // get rows 

  // get cell values
  // var cells = rows.all(by.tagName("td"));
  element.all(by.tagName("tr")).each(function (item) {
    item.all(by.tagName("td")).each(function (coulumn) {
      coulumn.getText().then(function (text) {
        console.log(text);
      })
    })
  })

  // cells.get(0).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(1).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(2).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(3).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(4).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(5).getText().then(function (text) {
  //   console.log(text);
  // })

  // cells.get(6).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(7).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(8).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(9).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(10).getText().then(function (text) {
  //   console.log(text);
  // })
  // cells.get(10).getText().then(function (text) {
  //   console.log(text);
  // });


  //expect(cells.get(1).getText()).toEqual("something")
  //expect(cells.get(2).getText()).toEqual("something")




});
