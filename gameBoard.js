let GameBoard = function () {
    this.score = 0;

    this.crash = function (enemy, bullet) { //điều kiện va trạm.
        let leftEnemy = enemy.xPosition;
        let rightEnemy = enemy.xPosition + enemy.width;
        let topEnemy = enemy.yPosition;
        let bottomEnemy = enemy.yPosition + enemy.height;
        let leftBullet = bullet.xPosition;
        let rightBullet = bullet.xPosition + bullet.width;
        let topBullet = bullet.yPosition;
        let bottomBullet = bullet.yPosition + bullet.height;
        if (rightEnemy < leftBullet || bottomEnemy < topBullet || leftEnemy > rightBullet || topEnemy > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };

    this.checkCrash = function () { //kiểm tra điều kiện va trạm.
        for (let enemy = 0; enemy < enemys.length; enemy++) {
            for (let bullet = 0; bullet < plane.bullets.length; bullet++) {
                if (this.crash(enemys[enemy], plane.bullets[bullet])) {
                    enemys[enemy].isLive = false;
                }

            }
            if (!enemys[enemy].isLive) { //xử lý tính điểm.
                enemys.splice(enemy, 1);
                this.score++;
            }

            if (enemys.length == 0) { //tạo lại enemy khi bắn hết.
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

