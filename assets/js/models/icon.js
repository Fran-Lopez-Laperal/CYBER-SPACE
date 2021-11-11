class Icons {
    constructor (ctx, x){
        this.x = x;
        this.ctx = ctx;
        this.y = 40;
        this.w = 40;
        this.h = 40;
        this.vx = 1
        this.vy = 1;

        this.icons = new Image();
        this.icons.src = "assets/img/icon.png"

    };


    draw () { 
        
        this.ctx.drawImage(this.icons, this.x, this.y, this.w, this.h)
    };

    move () {
        this.y += this.vy;
        this.x += this.vx;


        if(this.x + this.w >= this.ctx.canvas.width){
            this.vx = -this.vx
        }


        if ( this.y + this.h >= this.ctx.canvas.height){
            this.vy = -this.vy
        }
    };


    addScore() {
    };
}