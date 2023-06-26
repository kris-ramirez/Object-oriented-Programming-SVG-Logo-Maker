class Shape {
    constructor(shapeColor = '', text = '', textColor = '') {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
<text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="50">${this.text}</text>
</svg>`;
    }

}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="130" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="50">${this.text}</text>
</svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />
<text x="150" y="100" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="50">${this.text}</text>
</svg>`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square,
};