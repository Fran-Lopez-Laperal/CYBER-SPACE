class Rocks {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.w = 50;
    this.h = 50;
    this.vy = 5;

    this.rocks = new Image();
    this.rocks.src = "assets/img/simbol.png";
  }

  draw() {
    this.ctx.drawImage(this.simbol, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.vy;
  }

  colides(element) {
      this.x < element.x + element.w &&
      this.x + this.w > element.x &&
      this.y < element.y + element.h &&
      this.y + this.h > element.y
  }
}
