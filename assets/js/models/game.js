class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.onGameOver = () => {};
    this.canvas.width = 450;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext("2d");
    this.eviltick = 0;
    this.icontick = 0;
    this.monstertick = 0;
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
    this.monsters = [];
    this.score = new Score(this.ctx);
    this.bestScore = 0;
    this.life = 0;
    this.healthBar = new Healthbar(this.ctx, 100, 470, 200, 9, "#1FF50A");
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.eviltick++;
        this.icontick++;
        this.monstertick++;
        this.audio = new Audio();
        this.audio.src = "assets/audio/voxel-revolution.mp3";
        this.clear();
        this.move();
        this.draw();
        this.checkColisions();

        if (this.eviltick % 100 === 0) {
          const randomX = Math.random() * (this.ctx.canvas.width - 100);
          const randomY = Math.random() * (this.ctx.canvas.height - 100);
          const evil = new Evil(this.ctx, randomX, randomY);
          this.evils.push(evil);
          //console.log("is there any evil", this.evils)
        }

        if (this.icontick % 800 === 0) {
          const randomX = Math.random() * (this.ctx.canvas.height - 100);
          const randomY = Math.random() * (this.ctx.canvas.width - 100);
          const icon = new Icons(this.ctx, randomX, randomY);
          this.icons.push(icon);
          //console.log("is there any icon", this.icons)
          //console.log(randomE)
        }
        if (this.monstertick % 300 === 0) {
          const randomX = Math.random() * (this.ctx.canvas.height - 100);
          const randomY = Math.random() * (this.ctx.canvas.width - 100);
          const monster = new Monster(this.ctx, randomX, randomY);
          this.monsters.push(monster);
          // console.log(monster);
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
    this.onGameOver();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.witdth, this.canvas.height);
  }

  move() {
    this.player.move();

    this.monsters.forEach((monster) => monster.move());

    this.evils.forEach((evil) => evil.move());

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

      this.healthBar.decrease();
    }

    const friend = this.icons.find((icon) => this.player.collides(icon));
    if (friend) {
      this.healthBar.increase();
      friend.life = true;
    }

    const monster = this.monsters.find((monster) =>
      this.player.collides(monster)
    );
    if (monster) {
      monster.hitted = true;

      this.healthBar.decrease();
    }

    for (let i = 0; i < this.player.bullets.length; i++) {
      const bullet = this.player.bullets[i];
      for (let j = 0; j < this.evils.length; j++) {
        const enemy = this.evils[j];

        if (bullet.collides(enemy)) {
          this.player.bullets.splice(i, 1);
          this.evils.splice(j, 1);
          this.score.increase();
          break;
        }
      }
      for (let k = 0; k < this.monsters.length; k++) {
        const monster = this.monsters[k];

        if (bullet.collides(monster)) {
          //resto a monster 1 a sus vidas, por tanto hay que crear this.monster.lifes en el constructor de monster
          this.player.bullets.splice(i, 1);
          monster.lifes--
          
          if(monster.lifes <= 0){
            this.monsters.splice(k, 1)
            this.score.increase(10)
          }
          
        }
      }
    }

    if (this.healthBar.isEmpty()) {
      this.stop();
      //TODO: llamar e implementar Game Over
    }
  }

  draw() {
    this.evils = this.evils.filter((evil) => !evil.hitted);

    this.icons = this.icons.filter((icon) => !icon.life);

    this.monsters = this.monsters.filter((monster) => !monster.hitted);

    this.background.draw();
    this.player.draw();

    this.healthBar.draw();
    this.score.draw();

    this.evils.forEach((evil) => {
      evil.draw();
    });

    this.icons.forEach((icon) => {
      icon.draw();
    });

    this.monsters.forEach((monster) => {
      monster.draw();
    });
  }
}
