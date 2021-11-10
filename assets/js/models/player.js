class Player {
    constructor (ctx){
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0;
        
        this.sprite = new Image();
        this.sprite.src = "assets/img/player.png"

    };


    draw() {  
        this.ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h)  

        if (this.x + this.vx <= this.ctx){}
    };



    move() {  
        this.x += this.vx;
        this.y *= this.vy;
        this.vy += this.ay;
        this.vy -= this.ay     
    };



    shooting() {    
    };



    addScore() {    
    }
    


    onKeyMove() {
    };


}