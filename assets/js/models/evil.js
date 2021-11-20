class Evil {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.vx = 3;
    this.vy = 0.5;
    this.hitted = false;
    this.fired = false;

    this.evils = new Image();
    this.evils.src = "assets/img/evil.png";
  }

  draw() {
    this.ctx.drawImage(this.evils, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.vy;
    this.x += this.vx;

    if (this.x + this.w >= this.ctx.canvas.width || this.x <= 0) {
      this.vx = -this.vx;
    }

    if (this.y + this.h >= this.ctx.canvas.height || this.y <= 0) {
      this.vy = -this.vy;
    }
  }
}
