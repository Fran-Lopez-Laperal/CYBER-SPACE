class Evil {
    constructor (ctx, x){
        this.x = x;
        this.ctx = ctx;
        this.y = 30;
        this.w = 30;
        this.h = 30;
        this.vx = 1;
        this.vy = 1;

        this.evils = new Image();
        this.evils.src = "assets/img/player.png"


        
    };



    draw() {    

        this.ctx.drawImage(this.evils, this.x, this.y, this.w, this.h)
    };


    
    move() {   
        this.y += this.vy
        this.x += this.vx;



        if (this.x + this.w >= this.ctx.canvas.width || this.x <= 0){
            this.vx = -this.vx;
        }
        


        if (this.y + this.h >= this.ctx.canvas.height || this.y <= 0){
            this.vy = -this.vy
        }
    }


    animate() {        
    };



    removeScore(){   
    };

};