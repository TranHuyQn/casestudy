let canvas = document.getElementById('gameBoard');
let ctx = canvas.getContext('2d');

let Background = function () {
    let bgImage = ["images/background1.png", "images/background2.png", "images/background3.png", "images/background4.png"];
    this.img = "";
    this.setImage = function () {
        let temp = bgImage[Math.floor(Math.random()*bgImage.length)];

        if (this.img == temp) {
            temp = bgImage[Math.floor(Math.random()*bgImage.length)];
        } else {
            this.img = temp;
        }
    };

    this.draw = function () {
        let imgBg = new Image();
        imgBg.src = this.img;
        ctx.drawImage(imgBg, 0, 0);
    }
};