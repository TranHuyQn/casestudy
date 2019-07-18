let circles = [];

function Circle(x, y, radius,color, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

    };
    this.move = function () {
        this.y += this.speed;
    };
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return 'rgb(' + red + ',' + blue + ',' + green + ')';
}

function createCircle() {

    let radius = Math.floor(Math.random() * 6 + 10);
    let speed = 0.5;
    let color = getRandomColor();
    let x = Math.random() * ((canvas.width - radius) - radius + 1) + radius;
    let y = Math.random() * (0 - canvas.height);
    let circle = new Circle(x, y, radius,color, speed);
    circle.draw();
    circles.push(circle);
}

function creatMultipleCircle() {
    for (let i = 0; i < 50; i++) {
        createCircle();
    }
}
creatMultipleCircle();

function showCircles(){
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].draw();
    }
}

