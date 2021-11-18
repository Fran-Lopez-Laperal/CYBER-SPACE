class Monster {
  contructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 100;
    this.w = 100;
    this.h = 100;
    this.vy = 2;

    this.monster = new Image();
    this.monster.src = "assets/img/monster.png";
    this.frameIndex = 0;
    this.thick = 0;
  }

  draw() {
      this.tick++

    this.ctx.drawImage(this.monster, 
        (this.frameIndex * this.monster.width) / 3,
        this.monster.width / 3;
        this.monster.height
        this.x, 
        this.y, 
        this.w, 
        this.h);
  }

  move() {
   this.y += this.vy;


  }
}
