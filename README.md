# _Pizza Parlor Emiliano Slaibe_

#### By _**Emiliano Slaibe**_

#### _Emiliano's Pizza Company_

## Technologies Used

* _HTML_
* _CSS_
* _GitHub_
* _VS Code_
* _JavaScript_

## Description

_{This website will allow users order a small or large pizza with up to 3 toppings.}_

## Setup/Installation Requirements
* _To clone this repository to your desktop do the following:_
* _Open the Git Bash Terminal (or a similar tool) to select the location in your computer to save the project_
* _Use the "git clone [https://github.com/imeime23/Pizza-Parlor.git]" command to clone the project_
* _Run the "git remote" command, to see that our newly created local .git repository is automatically linked with the nickname "origin" to the remote repository from which you clone_

## Link to site on GitHubPages

_[https://github.com/imeime23/Pizza-Parlor.git]_

## Test Driven Development

* _Describe: calculateCost()_ 

_Test: "It should return the cost of a small pizza without toppings"
Code: const mySmallPizza = new Pizza('small');
mySmallPizza.calculateCost();
Expected Output: 5_

_Test: "It should return the cost of a small pizza with 1 topping"
Code: const mySmallPizza = new Pizza(['mushrooms' ], 'small');
mySmallPizza.calculateCost();
Expected Output: 6_

_Test: "It should return the cost of a small pizza with 2 toppings"
Code: const mySmallPizza = new Pizza(['mushrooms', 'pepperoni'], 'small');
mySmallPizza.calculateCost();
Expected Output: 7_

_Test: "It should return the cost of a small pizza with 3 toppings"
Code: const mySmallPizza = new Pizza(['mushrooms', 'pepperoni', 'chicken'], 'small');
mySmallPizza.calculateCost();
Expected Output: 8_

_Test: "It should return the cost of a large pizza without topping"
Code: const mylargePizza = new Pizza('large');
mylargePizza.calculateCost();
Expected Output: 10_

_Test: "It should return the cost of a large pizza with 1 topping"
Code: const mylargePizza = new Pizza(['mushrooms' ], 'large');
mylargePizza.calculateCost();
Expected Output: 11_

_Test: "It should return the cost of a large pizza with 2 toppings"
Code: const mylargePizza = new Pizza(['mushrooms', 'pepperoni' ], 'large');
mylargePizza.calculateCost();
Expected Output: 12_

_Test: "It should return the cost of a large pizza with 3 toppings"
Code: const mylargePizza = new Pizza(['mushrooms', 'pepperoni', 'chicken'], 'large');
mylargePizza.calculateCost();
Expected Output: 13_

## Known Bugs

* _No known bugs_

## License

_Copyright (c) <2023> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

Copyright (c) _February 25, 2023_ _Emiliano Slaibe_