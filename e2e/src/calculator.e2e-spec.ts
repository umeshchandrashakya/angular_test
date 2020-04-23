import { browser, element, by } from "protractor";

describe("angularjs homepage todo list", function () {
  function Calc(a, b, c) {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element.all(by.tagName("option")).each(function (item) {
      item.getAttribute("value").then(function (values) {
        if (values == c) {
          item.click();
        }
      });
    });

    element(by.id("gobutton")).click();
  }

  // it("should add a todo", function() {
  //   browser.get("https://angularjs.org");

  //   element(by.model("todoList.todoText")).sendKeys(
  //     "write first protractor test"
  //   );
  //   element(by.css('[value="add"]')).click();

  //   var todoList = element.all(by.repeater("todo in todoList.todos"));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual("write first protractor test");

  //   // You wrote your first test, cross it off the list
  //   todoList
  //     .get(2)
  //     .element(by.css("input"))
  //     .click();
  //   var completedAmount = element.all(by.css(".done-true"));
  //   expect(completedAmount.count()).toEqual(2);
  // });

  // it("should add one and two", function() {
  //   browser.get("http://juliemr.github.io/protractor-demo/");
  //   element(by.model("first")).sendKeys(1);
  //   element(by.model("second")).sendKeys(4);

  //   element(by.id("gobutton")).click();
  //   //tagname[attribute-'value']
  //   // element(by.css("h2[class='ng-binding']"))
  //   //   .getText()
  //   //   .then(function(text) {
  //   //     console.log(text);
  //   //   });

  //   expect(element(by.binding("latest")).getText()).toEqual("5"); // This is wrong!
  // });

  it("chain locator test", () => {
    browser.get("http://juliemr.github.io/protractor-demo/");
    Calc(3, 5, "MULTIPLICATION");

    Calc(3, 5, "DIVISION");
    Calc(3, 5, "DIVISION");
    Calc(10, 6, "ADDITION");
    element.all(by.repeater("result in memory")).each(function (item) {
      item
        .element(by.css("td:nth-child(3)"))
        .getText()
        .then(function (text) {
          console.log(text);
        });

      // element(by.model("first")).sendKeys(1);
      // element(by.model("second")).sendKeys(4);

      // element(by.id("gobutton")).click();

      // element(by.model("first")).sendKeys(1);
      // element(by.model("second")).sendKeys(7);

      // element(by.id("gobutton")).click();
      // element(by.model("first")).sendKeys(9);
      // element(by.model("second")).sendKeys(7);

      // element(by.id("gobutton")).click();
      //this is for single eleemnts
      // element(by.repeater("result in memory"))
      //   .element(by.css("td:nth-child(3)"))
      //   .getText()
      //   .then(function(text) {
      //     console.log(text);
      //   });
      // element
      //   .all(by.repeater("result in memory"))
      //   .count()
      //   .then(function(text) {
      //     console.log(text);
      //   });

      // element.all(by.repeater("result in memory")).each(function(items) {
      //   items
      //     .element(by.css("td:nth-child(3)"))
      //     .getText()
      //     .then(function(text) {
      //       console.log(text);
      //     });
      // });
    });
  });
});
