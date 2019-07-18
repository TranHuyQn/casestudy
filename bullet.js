let Bullet = function (xPosition, yPosition, radius) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = radius;
    this.speed = 10;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    };

    this.move = function () {
        this.yPosition -= this.speed;
    }
};