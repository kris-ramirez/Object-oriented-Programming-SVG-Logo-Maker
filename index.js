const inquirer = require("inquirer");
const fs = require("fs");
//require classes from shapes.js



//prompt user to answer questions
function userPrompts() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter three characters for your logo."
            name: "text",
            },
            //text color prompt
            {
                type: "input",
                message: "What color would you like your text to be? Enter color OR hexadecimal number."
            name: "textColor",
            },
            //shape prompt
            {
                type: "list",
                message: "Pick a shape for your logo."
            choices: ["Circle", "Triangle", "Square"]
            name: "shape",
            },
            //shape color prompt
            {
                type: "input",
                message: "What color would you like your shape to be? Enter color OR hexadecimal number."
            name: "shapeColor",
            },
        ])
        .then((answers) => {
            fs.writeFile("logo.svg", answers);
        });
}

userPrompts();