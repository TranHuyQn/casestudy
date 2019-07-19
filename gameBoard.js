let GameBoard = function () {
    this.score = 0;

    this.crash = function (enemy, bullet) {
        let leftEnemy = enemy.xPosition;
        let rightEnemy = enemy.xPosition + enemy.width;
        let topEnemy = enemy.yPosition;
        let bottomEnemy = enemy.yPosition + enemy.height;
        let leftBullet = bullet.xPosition - bullet.radius;
        let rightBullet = bullet.xPosition + bullet.radius;
        let topBullet = bullet.yPosition - bullet.radius;
        let bottomBullet = bullet.yPosition + bullet.radius;
        if (rightEnemy < leftBullet || bottomEnemy < topBullet || leftEnemy > rightBullet || topEnemy > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };

    this.checkCrash = function () {
        for (let enemy = 0; enemy < enemys.length; enemy++) {
            for (let bullet = 0; bullet < plane.bullets.length; bullet++) {
                if (this.crash(enemys[enemy], plane.bullets[bullet])) {
                    enemys[enemy].isLive = false;
                }

            }
            if (!enemys[enemy].isLive) {
                enemys.splice(enemy, 1);
                this.score++;
            }

            if (enemys.length == 0) {
                let imgBg = document.getElementById('imgBg');
                let index = 1;
                if (index == 1) {
                    index = 2;
                } else {
                    index = 1;
                }
                imgBg.src = "images/background" + index + ".png";
                creatMultipleEnemy();
                showEnemys();

            }
        }
    };

    this.drawScore = function () {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Điểm: ' + this.score, 20, 30);
        ctx.closePath();
    }
};

