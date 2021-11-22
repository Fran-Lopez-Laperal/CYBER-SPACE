class Monster {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 90;
    this.h = 90;
    this.vx = 1;
    this.vy = 1;
    this.hitted = false;
    this.lifes = 15;

    this.sprite = new Image();
    this.sprite.src = "assets/img/monster.png";
    this.sprite.frameIndex = 0;
    this.tick = 0;
    this.rocks = [];
  }

  monstershoot() {
    this.rocks.push(new Rocks(this.ctx, this.x, this.y));
  }

  draw() {
    this.tick++;

    this.ctx.drawImage(
      this.sprite,
      (this.sprite.frameIndex * this.sprite.width) / 3,
      0,
      this.sprite.width / 3,
      this.sprite.height,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.rocks.forEach((rock) => {
      rock.draw();
    });
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
    this.rocks.forEach((rock) => rock.draw());
  }
}
