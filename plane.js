let Plane = function (xPosition, yPosition, width, height, speed, isMoveLeft, isMoveRight, isShoot) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;
    this.isShoot = isShoot;
    this.reload = 9;
    this.reloadCount = 0;
    this.bullets = [];

    this.draw = function () {
        let imgPlane = document.getElementById('imgPlane');
        ctx.drawImage(imgPlane, this.xPosition, this.yPosition, this.width, this.height);
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
            this.reloadCount++; //xử ly khảng cách giữa hai lần bắn
            if (this.reloadCount >= this.reload) {
                let bullet = new Bullet(this.xPosition + this.width / 2 - BULLET_WIDTH/2, this.yPosition, BULLET_WIDTH, BULLET_HEIGHT); //tạo bullet tại vị trí của plane.
                this.bullets.push(bullet);
                let sound = new Audio();
                sound.src = "sounds/bulletSound.mp3";
                sound.play();
                this.reloadCount = 0;
            }
        }
        for (let i = 0; i < this.bullets.length; i++) { //xóa bullet khi ra khỏi màn hình.
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



