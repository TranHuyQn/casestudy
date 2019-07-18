let GameBoard = function () {
    this.score = 0;

    this.crash = function (circle, bullet) {
        let leftCircle = circle.xPosition - circle.radius;
        let rightCircle = circle.xPosition + circle.radius;
        let topCircle = circle.yPosition - circle.radius;
        let bottomCircle = circle.yPosition + circle.radius;
        let leftBullet = bullet.xPosition - bullet.radius;
        let rightBullet = bullet.xPosition + bullet.radius;
        let topBullet = bullet.yPosition - bullet.radius;
        let bottomBullet = bullet.yPosition + bullet.radius;
        if (rightCircle < leftBullet || bottomCircle < topBullet || leftCircle > rightBullet || topCircle > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };

    this.checkCrash = function () {
        for (let circle = 0; circle < circles.length; circle++) {
            for (let bullet = 0; bullet < plane.bullets.length; bullet++) {
                if (this. crash(circles[circle], plane.bullets[bullet])) {
                    circles[circle].isLive = false;
                }

            }
            if (!circles[circle].isLive){
                circles.splice(circle, 1);
                this.score ++;
            }

            if (circles.length == 0) {
                creatMultipleCircle();
                showCircles();

            }
        }
    };

    this.drawScore = function () {
      ctx.beginPath();
      ctx.font = "20px arial";
      ctx.fillStyle = 'white';
      ctx.fillText('Điểm: ' + this.score,20,30);
      ctx.closePath();
    }
};

