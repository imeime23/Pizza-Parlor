# _Language Suggester Survey Emiliano Slaibe_

#### By _**Emiliano Slaibe**_

#### _Programming Language Suggester Survey_

## Technologies Used

* _HTML_
* _GitHub_
* _VS Code_
* _JavaScript_

## Description

_{This website will allow users decide which programming language they should learn.}_

## Setup/Installation Requirements
* _To clone this repository to your desktop do the following:_
* _Open the Git Bash Terminal (or a similar tool) to select the location in your computer to save the project_
* _Use the "git clone [https://github.com/imeime23/Language-Suggester-Project2.git]" command to clone the project_
* _Run the "git remote" command, to see that our newly created local .git repository is automatically linked with the nickname "origin" to the remote repository from which you clone_

## Link to site on GitHubPages

_[https://github.com/imeime23/Language-Suggester-Project2.git]_

## Test Driven Development

* _  _

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

Copyright (c) _January 29, 2023_ _Emiliano Slaibe_







Test Driven Development
Describe: Anonymous (within the EventListener Method)

Test: For numbers that contain a 3, all digits should be replaced with "Won't you be my neighbor?" Code: Anonymous (5); Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5]

Test: For numbers that contain a 2, all digits should be replaced with "Boop!" Code: Anonymous (5); Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5]

Test: For numbers that contain a 1, all digits should be replaced with "Beep!" Code: Anonymous (5); Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5]




<!--numberOfOccurrencesInText()>

<!--string example "red blue red red green red"-->

<!--Our First Test-->

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0


<!--Our Second Test-->
Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

<!--MULTIMPLE WORDS- Our Third Test Are we ready to move onto multiple words? Well, we should verify that it doesn't return a match if the word and the text aren't the same first.-->

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0