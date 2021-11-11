class Player {
    constructor (ctx){
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.w = 40;
        this.h = 25;
        this.vx = 0;
        this.vy = 0;
        
        
        this.sprite = new Image();
        this.sprite.src = "assets/img/player-1 (1).png";
        this.sprite.frameIndex = 0;
        this.tick = 0;
    };

    // 0 * 120 / 3 === 0
    // 1 * 120 / 3 === 40
    // 2 * 120 / 30 == 80

    draw() {  
        this.tick++
        
        
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

       
    };



    move() {  
        this.x += this.vx;
        this.y += this.vy;
       

        if (this.x + this.w >= this.ctx.canvas.width || this.x <= 0){
            this.vx = -this.vx;
        }


        if (this.y + this.h >= this.ctx.canvas.height){
            this.y = this.ctx.canvas.height - this.h;
            this.vy = -this.vy;
        };
        
        if (this.y <= 0){
            this.vy = -this.vy;
        };

        if(this.tick % 10 === 0){
            this.sprite.frameIndex += 1;
        }

        if(this.sprite.frameIndex > 2){
            this.sprite.frameIndex = 0
        }

        



    };



    shooting() {    
    };



    addScore() {    
    }
    


    onKeyDown(code) {
        
        if (code === RIGHT_KEY){
            this.vx = 10;
        }

        if (code === LEFT_KEY){
            this.vx = -10;
        };

        if (code === DOWN_KEY){
          this.vy = 10;
        }

        if (code === UP_KEY){
             this.vy = -10;
        }; 
    };

    onKeyUp(code){
        if(code === RIGHT_KEY || code === LEFT_KEY){
            this.vx = 0;
        }
        
        if(code === DOWN_KEY || code === UP_KEY){
            this.vy = 0;
        }

    }


}