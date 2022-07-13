Describe: .calculateCost()
Test:"It should return a calculated cost of pizza";
Code:
type-pizza = "New York-Style Pizza";
Pizza.prototype.calculateCost();
Expexted output: 6.50;

Describe: .calculateCost()
Test:"It should return a calculated cost of pizza with choozen size";
Code:
type-pizza = "New York-Style Pizza";
size-pizza = "Small";
Pizza.prototype.calculateCost();
Expexted output: currentCost + 0;

Describe: .calculateCost()
Test:"It should return a calculated cost of pizza with choozen topping";
Code:
type-pizza = "New York-Style Pizza";
typeOfTopping = "pineapple";
Pizza.prototype.calculateCost();
Expexted output: 6.50 + 1;

Describe: .toppingToString();
Test: "It should return choozen topping in String type";
Code:
choosenTopping = ['pineapple', 'anchovies'];
Expexted output:
pineapple anchovies;







# _{Pizza Parlor}_

#### Authored by: _**Liliia Kryvelova**_

https://github.com/liliia87/Order-Pizza.git

#### _{Create a website for a pizza order. User should have a chance to add one or more toppings, a size of pizza and see the final cost.}_

## Technologies Used
* _Html_
* _JQuery_
* _JavaScript_

## Description

* _Allow the user to choose toppings and size for the pizza they'd like to order;_
* _Create a pizza object constructor with properties for toppings and size;_
* _Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this._

## Setup/Installation Requirements

* _Clone this git on your local computer_
* _For clonning: use button Clone -> from repository._
* _Copy the clone command(SSH format or HTTPS)._
* _From a terminal on your local computer, use command "cd" to find the directory where you want to clone this repository._
* _Type the command ($ git clone HTTPs)._
* _If you clone successfully , a new sub-directory appears on your local computer._
* _In the directory you will find(index.html, folder->css, folder->js)._
* _Run the index.html (double click on it and the page should appear in web browser)._
* _If you are willing to debug or change something in the project, the best way is to open it through the VisuaStudio._


## Known Bugs

* _For now, there aren't known bugs_

## License

* _contact_  _lilia.krivelyova@gmail.com_
