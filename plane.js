let canvas = document.getElementById('gameBoard');
let ctx = canvas.getContext('2d');

let Background = function () {
    this.draw = function () {
        let imgBg = document.getElementById('imgBg');
        ctx.drawImage(imgBg, 0, 0);
    }
};

let Bullet = function (xPosition, yPosition, radius) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = radius;

    this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
    };

    this.move = function () {
        this.yPosition -= 10;
    }
};

let Plane = function (xPosition, yPosition, width, height, speed, isMoveLeft, isMoveRight, isShoot) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yposition = yPosition;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;
    this.isShoot = isShoot;
    this.reload = 10;
    this.reloadCount = 0;
    this.bullets = [];

    this.getWidth = function () {
        return this.width;
    };

    this.getHeight = function () {
        return this.height;
    };

    this.getXPosition = function () {
        return this.xPosition;
    };

    this.getYPosition = function () {
        return this.yposition;
    };

    this.draw = function () {
        let imgPlane = document.getElementById('imgPlane');
        ctx.drawImage(imgPlane, this.xPosition, this.yposition, this.width, this.height);
    };

    this.move = function () {
        if (this.isMoveLeft) {
            this.xPosition -= this.speed;
        } else if (this.isMoveRight) {
            this.xPosition += this.speed;
        }

        if (this.xPosition + this.width / 2 < 0) {
            this.xPosition = canvas.width - this.width / 2;
        } else if (this.xPosition + this.width / 2 > canvas.width) {
            this.xPosition = 0 - this.width / 2;
        }
    };

    this.shoot = function () {

        if (this.isShoot) {
            this.reloadCount++;
            if (this.reloadCount >= this.reload) {
                let bullet = new Bullet(this.xPosition + this.width / 2, this.yposition, 2);
                this.bullets.push(bullet);
                this.reloadCount = 0;
            }
        }
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].yPosition < 0) {
                this.bullets.splice(i, 1);
                i--;
            } else {
                this.bullets[i].move();
                this.bullets[i].draw();
            }
        }
    }

};


let background = new Background();
let plane = new Plane(canvas.width / 2 - 41 / 2, canvas.height - 62, 41, 42, 5, false, false, false);
