class Monster {
  contructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 100;
    this.w = 50;
    this.h = 50;
    this.vy = 2;
    this.vx = 2;

    this.monster = new Image();
    this.monster.src = "assets/img/monster.png";
    this.monster.frameIndex = 0;
    this.thick = 0;
  }

  draw() {
    this.tick++;

    this.ctx.drawImage(
      this.monster,
      (this.monster.frameIndex * this.monster.width) / 3,
      0,
      this.monster.width / 3,
      this.monster.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
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

    if (this.thick % 10 === 0) {
      this.monster.frameIndex += 1;
    }

    if (this.monster.frameIndex > 2) {
      this.monster.frameIndex = 0;
    }
  }
}
