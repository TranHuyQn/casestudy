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

//khởi tạo enemy.
function createEnemy(){
    let speed = Math.random()*1.3 + 0.5;
    let xEnemy = Math.random() * (canvas.width - ENEMY_WIDTH + 1);
    let yEnemy = Math.random() * (0 - canvas.height);
    let enemy = new Enemy(xEnemy, yEnemy, ENEMY_WIDTH, ENEMY_HEIGHT, speed);
    enemys.push(enemy);
    enemy.draw();
}

//khởi tạo 50 enemy.
function creatMultipleEnemy() {
    for (let i = 0; i < 50; i++) {
        createEnemy();
    }
}

creatMultipleEnemy();

//Hiển thị 50 enemy.
function showEnemys(){
    for (let i = 0; i < enemys.length; i++) {
        enemys[i].move();
        enemys[i].draw();

    }
}
