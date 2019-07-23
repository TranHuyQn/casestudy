let background = new Background();
let plane = new Plane(canvas.width / 2 - PLANE_WIDTH / 2, canvas.height - (PLANE_HEIGHT + PLANE_DISTANCE_DEFAULT), PLANE_WIDTH, PLANE_HEIGHT, PLANE_SPEED, false, false, false);
let gameBoard = new GameBoard();
let isGameOver = false;

gameBoard.control();

//Bắt đầu game.
background.setImage();
background.draw();
plane.draw();
gameBoard.drawScore();
gameBoard.drawguide();

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