class Monster {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.vx = 0.2;
    this.vy = 0.2;
    this.hitted = false;
    this.lifes = 2;

    this.sprite = new Image();
    this.sprite.src = "assets/img/monster.png";
    this.sprite.frameIndex = 0;
    this.tick = 0;
  }

  draw() {
    this.tick++;

    this.ctx.drawImage(this.sprite,
      (this.sprite.frameIndex * this.sprite.width) / 3,
      0,
      this.sprite.width / 3,
      this.sprite.height,
      this.x, 
      this.y, 
      this.w,
       this.h);
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
      this.sprite.frameIndex += 1;
    }
    
    if (this.sprite.frameIndex > 2) {
      this.sprite.frameIndex = 0;
      
    }
  }
}
