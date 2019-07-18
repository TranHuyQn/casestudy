let circles = [];

function Circle(xPosition, yPosition, radius,color, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.isLive = true;

    this.draw = function () {
        if (this.isLive) {
            ctx.beginPath();
            ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    this.move = function () {
        this.yPosition += this.speed;
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
    let speed = 1;
    let color = getRandomColor();
    let x = Math.random() * ((canvas.width - radius) - radius + 1) + radius;
    let y = Math.random() * (0 - canvas.height);
    let circle = new Circle(x, y, radius,color, speed);
    circles.push(circle);
    circle.draw();

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

