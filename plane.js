let canvas = document.getElementById('gameBoard');
let ctx = canvas.getContext('2d');
let bullets = [];

let Background = function () {
    this.draw = function () {
        let imgBg = document.getElementById('imgBg');
        ctx.drawImage(imgBg, 0, 0);
    }
};

let Plane = function (xPosition, yPosition, width, height, speed, isMoveLeft, isMoveRight) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yposition = yPosition;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;

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

};

let Bullet = function(isShoot){
    this.isShoot = isShoot;
    let yBullet;
    this.shoot = function (plane) {
        let xBullet = plane.getXPosition() + plane.getWidth()/2;
        yBullet = plane.getYPosition();
        if (this.isShoot) {
            ctx.beginPath();
            ctx.arc(xBullet, yBullet, 2, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    };

    this.move = function () {
        // let yBullet = plane.getYPosition();
        yBullet -= 1;
    }
};

let background = new Background();
let plane = new Plane(canvas.width / 2 - 41 / 2, canvas.height - 62, 41, 42, 5, false, false);
let bullet = new Bullet(false);
