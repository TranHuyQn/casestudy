let background = new Background();
let plane = new Plane(canvas.width / 2 - 41 / 2, canvas.height - 62, 41, 42, 5, false, false, false);
let gameBoard = new GameBoard();
let isGameOver = false;

//xử lý di chuyển mượt.
document.addEventListener('keyup', function (event) {
    if (event.keyCode == 37) {
        plane.isMoveLeft = false;
    } else if (event.keyCode == 39) {
        plane.isMoveRight = false;
    } else if (event.keyCode == 32) {
        plane.isShoot = false;
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        plane.isMoveLeft = true;
    } else if (event.keyCode == 39) {
        plane.isMoveRight = true;
    } else if (event.keyCode == 32) {
        plane.isShoot = true;
    }
});

document.addEventListener('keypress', function (event) {
    console.log(event);
    if (event.keyCode == 13) {
        startGame();
    } else if (event.keyCode == 114) {
        restart();
    }
});

//Bắt đầu game.
background.draw();
plane.draw();
gameBoard.drawScore();

function startGame() {
    if (!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw();
        showEnemys();
        plane.draw();
        plane.move();
        plane.shoot();
        gameBoard.checkCrash();
        //xử lý kết thúc game.
        for (i = 0; i <  enemys.length; i++) {
            if ( enemys[i].yPosition > canvas.height) {
                isGameOver = true;
            }
        }
        gameBoard.drawScore();
        requestAnimationFrame(startGame);
    } else {
        alert('Kết thúc! ' + gameBoard.score + ' điểm');
    }

}

function restart() {
    location.reload();
}