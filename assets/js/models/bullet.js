class Bullet {
  constructor(ctx, x, y ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 20;
    this.vy = 5;

    this.bullet = new Image();
    this.bullet.src = "assets/img/bullet.png";
  }

  draw() {
    this.ctx.drawImage(this.bullet, this.x, this.y, this.w, this.h);
  }
  move(){
    this.y -= this.vy
  }

  collides(element) {
    return (
      this.x < element.x + element.w &&
      this.x + this.w > element.x &&
      this.y < element.y + element.h &&
      this.y + this.h > element.y
    );
  }
}
