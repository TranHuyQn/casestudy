//load tài nguyên
var picsnames = ["background1.png", "background2.png", "background3.png", "background4.png", "bullet.png", "enemy.png", "plane.png"];
var musicNames = ["bulletSound.mp3", "bgSound.mp3", "silence.mp3"];
var picCount = 0;
var musicCount = 0;
var musics = [];

for (var i = 0; i < picsnames.length; i++) {
    var img = new Image();
    img.src = "images/" + picsnames[i];
    img.onload = function() {
        picCount++;
        if (picCount == picsnames.length) {
            loadMusic();
        }
    }
}

function loadMusic() {
    for (var i = 0; i < musicNames.length; i++) {
        var music = new Audio();
        music.src = "sounds/" + musicNames[i];
        musics.push(music);
        music.onloadedmetadata = function() {
            musicCount++;
            if (musicCount == musicNames.length) {
                loadingDiv.style.display = "none";
                main();
                musics[4].volume = 0.5;
                musics[4].loop = true;
                musics[4].play();
            }
        }
    }
}

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