class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 305;
    this.y = 460;
    this.h = 25;
    this.w = 25;
    this.value = 0;

    this.img = new Image();
    this.img.src = "assets/img/coin.png";
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.save();
    this.ctx.font = "20px games ";
    this.ctx.fillText(this.value, this.x + 30, this.y + 20);
    this.ctx.restore();
  }

  increase(amount = 1) {
    this.value += amount;
  }
}
