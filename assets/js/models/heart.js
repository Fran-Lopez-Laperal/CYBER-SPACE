class Heart {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 165;
    this.y = 860;
    this.w = 30;
    this.h = 30;

    this.heart = new Image();
    this.heart.src = "assets/img/heart.png";
  }
  draw() {
    this.ctx.drawImage(this.heart, this.x, this.y, this.w, this.h);
  }
}
