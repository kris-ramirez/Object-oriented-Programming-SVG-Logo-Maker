const inquirer = require("inquirer");
const fs = require("fs");
//require classes from shapes.js
const { Circle, Triangle, Square } = require("./lib/shapes");


//prompt user to answer questions
function userPrompts() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter three characters for your logo.",
                name: "text",
            },
            //text color prompt
            {
                type: "input",
                message: "What color would you like your text to be? Enter color OR hexadecimal number.",
                name: "textColor",
            },
            //shape prompt
            {
                type: "list",
                message: "Pick a shape for your logo.",
                choices: ["Circle", "Triangle", "Square"],
                name: "shape",
            },
            //shape color prompt
            {
                type: "input",
                message: "What color would you like your shape to be? Enter color OR hexadecimal number.",
                name: "shapeColor",
            },
        ])
        .then((answers) => {
            let shape;

            switch (answers.shape) {
                case "Circle":
                    shape = new Circle();
                    break;
                case "Triangle":
                    shape = new Triangle();
                    break;
                case "Square":
                    shape = new Square();
                    break;
            }

            shape.text = answers.text;
            shape.textColor = answers.textColor;
            shape.shapeColor = answers.shapeColor;

            const svgString = shape.render();

            fs.writeFile("logo.svg", svgString, (err) => {
                if (err) {
                    console.error("Error writing SVG file:", err);
                } else {
                    console.log("Generated logo.svg");
                }
            });
        });
}

userPrompts();