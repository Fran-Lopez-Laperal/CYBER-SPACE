class Evil {
    constructor (ctx, x){
        this.x = x;
        this.ctx = ctx;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        
        this.vy = 1;

        this.evils = new Image();
        this.evils.src = "assets/img/player.png"


        
    }



    draw() {    

        this.ctx.drawImage(this.evils, this.x, this.y, this.w, this.h)
    };


    
    move() {   
        this.y += this.vy
      //  if (this.h + this.y >= this.ctx.canvas.hwigth);   
    };


    animate() {        
    };



    removeScore(){   
    };

};