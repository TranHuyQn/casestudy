let enemys=[];
let Enemy = function (xPosition , yPosition, width, height, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.isLive = true;
    this.speed = speed;

    this.draw = function () {
        let imgEnemy = document.getElementById('imgEnemy');
        if (this.isLive) {
            ctx.drawImage(imgEnemy, this.xPosition, this.yPosition, this.width, this.height);
        }
    };

    this.move = function () {
        this.yPosition += this.speed
    }
};

function createEnemy(){
    let enemyWidth = 30;
    let enemyHeight = 24;
    let speed = Math.random()*1.3 + 0.5;
    let xEnemy = Math.random() * (canvas.width - enemyWidth + 1);
    let yEnemy = Math.random() * (0 - canvas.height);
    let enemy = new Enemy(xEnemy, yEnemy, enemyWidth, enemyHeight, speed);
    enemys.push(enemy);
    enemy.draw();
}

function creatMultipleEnemy() {
    for (let i = 0; i < 50; i++) {
        createEnemy();
    }
}

creatMultipleEnemy();

function showEnemys(){
    for (let i = 0; i < enemys.length; i++) {
        enemys[i].move();
        enemys[i].draw();

    }
}
