class Icons {
  constructor(ctx, x, y) {
    this.x = x;
    this.ctx = ctx;
    this.y = y;
    this.w = 130;
    this.h = 120;
    this.vx = 0;
    this.vy = 0;
    this.life = false;

    this.icons = new Image();
    this.icons.src = "assets/img/icon.png";
  }

  draw() {
    this.ctx.drawImage(this.icons, this.x, this.y, this.w, this.h);
  }

  // move () {
  //     this.y += this.vy;
  //     this.x += this.vx;

  //     if(this.x + this.w >= this.ctx.canvas.width || this.x <= 0){
  //         this.vx = -this.vx
  //     }

  //     if ( this.y + this.h >= this.ctx.canvas.height || this.y <= 0){
  //         this.vy = -this.vy
  //     }
  // };
}
