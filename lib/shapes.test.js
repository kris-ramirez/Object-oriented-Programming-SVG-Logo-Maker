const { Triangle, Circle, Square } = require("./shapes.js");

describe("Triangle Test", () => {
    test('Triangle render should return the correct svg string', () => {
        //example test given to us testing for triangle with blue background
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="blue">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="100" fill="" text-anchor="middle"></text>
</svg>`);
    });
});

describe("Circle Test", () => {
    test('Circle render should return the correct svg string', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="red">
<circle cx="150" cy="100" r="100" fill="red" />
<text x="150" y="100" fill="" text-anchor="middle"></text>
</svg>`);
    });
});

describe("Square Test", () => {
    test('Square render shoudl return the correct svg string', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="green">
<rect x="73" y="40" width="160" height="160" fill="green" />
<text x="150" y="100" fill="" text-anchor="middle"></text>
</svg>`);
    });
});