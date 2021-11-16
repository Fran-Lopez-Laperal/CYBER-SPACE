class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 450;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext("2d");
    this.tick = 0;
    this.drawIntervalId = undefined;
    this.fps = 1000 / 60;
    this.background = new Background(this.ctx);
    this.player = new Player(
      this.ctx,
      this.canvas.witdth / 2,
      this.canvas.height / 3
    );
    this.evils = [];
    this.icons = [];
    this.score = 10;
    this.life = 0;
    this.healthBar = new Healthbar(
      this.ctx,
      100,
      470,
      this.score * 20,
      9,
      "#1FF50A"
    );

    this.audio = new Audio();
    this.audio.src = "assets/audio/sound.mp3";
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.tick++;

        this.clear();
        this.move();
        this.draw();
        this.checkColisions();

        if (this.tick % 100 === 0) {
          const randomX = Math.random() * (this.ctx.canvas.width - 100);
          const randomY = Math.random() * (this.ctx.canvas.height - 100);
          const evil = new Evil(this.ctx, randomX, randomY);
          this.evils.push(evil);
          //console.log("is there any evil", this.evils)
        }

        if (this.tick % 700 === 0) {
          const randomX = Math.random() * (this.ctx.canvas.height - 100);
          const randomY = Math.random() * (this.ctx.canvas.width - 100);
          const icon = new Icons(this.ctx, randomX, randomY);
          this.icons.push(icon);
          //console.log("is there any icon", this.icons)
          //console.log(randomE)
        }
      }, this.fps);
    }
  }

  restart() {}

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  end() {
    this.stop();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.witdth, this.canvas.height);
  }

  move() {
    this.player.move();

    this.evils.forEach((evil) => {
      evil.move();
    });

    // this.icons.forEach(icon =>{
    //     icon.move()
    // });

    this.background.move();
  }

  onKeyDown(code) {
    this.player.onKeyDown(code);
  }

  onKeyUp(code) {
    this.player.onKeyUp(code);
  }

  checkColisions() {
    const enemy = this.evils.find((evil) => this.player.collides(evil));
    if (enemy) {
      enemy.hitted = true;
      this.score -= 1;
      this.healthBar.decrease();
    }

    const friend = this.icons.find((icon) => this.player.collides(icon));
    if (friend) {
      this.healthBar.increase();
      friend.life = true;
    }

    if (this.healthBar.isEmpty()) {
      this.stop();
      //TODO: llamar e implementar Game Over
    }
  }

  draw() {
    this.evils = this.evils.filter((evil) => !evil.hitted);

    this.icons = this.icons.filter((icon) => !icon.life);

    this.background.draw();
    this.player.draw();
    this.healthBar.draw();

    this.evils.forEach((evil) => {
      evil.draw();
    });

    this.icons.forEach((icon) => {
      icon.draw();
    });
  }
}
