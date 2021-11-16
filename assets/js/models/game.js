class Game {
    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 450;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext('2d');
        this.tick = 0;
        this.drawIntervalId = undefined;
        this.fps = 1000 / 60;
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, this.canvas.witdth / 2, this.canvas.height / 3);
        this.healthBar = new Healthbar(this.ctx, 100, 470, 200, 9, 100, "#1FF50A");
        this.evils = [];
        this.icons = [];
        this.score = 100;
        this.life = 0;
        
        
       

        this.audio = new Audio();
        this.audio.src = "assets/audio/sound.mp3";
        
    }


    start() {
        
        if(!this.drawIntervalId){
            this.drawIntervalId = setInterval(() => {
                this.tick++;
                
                this.clear();
                this.move();
                this.draw();
                this.restLife();
                this.sumLife();
                this.healthPlayer();
                this.checkColisions();
                


   
                if (this.tick % 100 === 0){
                    const randomX = Math.random() * (this.ctx.canvas.width - 100);
                    const evil = new Evil(this.ctx, randomX);
                    this.evils.push(evil);
                    //console.log("is there any evil", this.evils)
                }



                if (this.tick % 700 === 0){
                    const randomE = Math.random() * (this.ctx.canvas.width - 100);
                    const icon = new Icons(this.ctx, randomE);
                    this.icons.push(icon);
                    //console.log("is there any icon", this.icons)
                    //console.log(randomE)
                }


                
            },this.fps);
            
        }
        
    };
    

    
    restart() {
        
    };

    
    stop(){  
         clearInterval(this.drawIntervalId);
         this.drawIntervalId = undefined;  
    };

    
    end() {
        this.stop();        
    };

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.witdth, this.canvas.height)
    };

    
    move() {
        this.player.move();

        this.evils.forEach(evil => {
            evil.move()
        });


        this.icons.forEach(icon =>{
            icon.move()
        });

        //this.background.move();

    };





   

    
    
    
    

    onKeyDown(code){
        this.player.onKeyDown(code);
    }

    onKeyUp(code){
        this.player.onKeyUp(code);
    }
    
    checkColisions(){
        const enemy = this.evils.find(evil => this.player.collides(evil))
        if (enemy) {
            enemy.hitted = true
            
        }

        const friend = this.icons.find(icon => this.player.collides(icon))
        if (friend) {
            friend.life = true 

        }
    }

    restLife() {
       const scoreEvils = this.evils.filter(evil => 
            evil.x < this.player.x + this.player.w &&
            evil.x + evil.w > this.player.x &&
            this.player.y < evil.y + evil.h &&
            this.player.y + this.player.h > evil.y
        )


        scoreEvils.forEach(evil => evil.hitted = true)

        this.score -= scoreEvils.length ;
        
    };

    sumLife() {

        const scoreLife = this.icons.filter(icon =>
            icon.x < this.player.x + this.player.w &&
            icon.x + icon.w > this.player.x &&
            this.player.y < icon.y + icon.h &&
            this.player.y + this.player.h > icon.y
        )
            
            scoreLife.forEach(icon => icon.life = true)
            
            this.life += scoreLife.length;

    };


    healthPlayer() {
        
    }

    draw() {
        this.evils = this.evils.filter(evil => !evil.hitted);

        this.icons = this.icons.filter (icon => !icon.life);

      
        this.background.draw();
        this.player.draw();
        this.healthBar.draw();

        this.evils.forEach(evil =>{
            evil.draw()
        });
        
        this.icons.forEach(icon =>{
            icon.draw()
        });


        
        this.ctx.font = '200px';
        this.ctx.fillStyle = 'red';        
        this.ctx.fillText(this.score, 20, 100);
        this.ctx.fillText(this.life, 20, 110);
       
    };





};