let canvas = document.getElementById('gameBoard');
let ctx = canvas.getContext('2d');

let Background = function () {
    this.draw = function () {
        let imgBg = document.getElementById('imgBg');
        ctx.drawImage(imgBg, 0, 0);
    }
};