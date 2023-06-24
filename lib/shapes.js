class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
        this.text = '';
        this.textColor = '';
    }
    render() {
        return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
      <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;
    }

}

class Triangle {
    constructor(shapeColor) {
        this.shapeColor = this.shapeColor;
        this.text = '';
        this.textColor = '';
    }
    render() {
        return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;
    }
}

class Square {
    constructor(shapeColor) {
        this.shapeColor = this.shapeColor;
        this.text = '';
        this.textColor = '';
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.shapeColor}">
      <rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />
      <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;
    }
}
module.exports = {
    Circle,
    Triangle,
    Square,
};