class Background  {
    constructor (ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        
        this.vy = -1;

        this.img = new Image();
        this.img.src = 'assets/img/background.png';
        this.img.width = this.width;
        this.img.height = this.height;
        
    }
    

    draw () {
        //Añadir parametros para pintar la imagen.
        this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
        this.ctx.drawImage(this.img, this.x, this.y + this.img.height, this.img.width, this.img.height);
        }
        
        
        move() {
        // Añadir parámetros para mover la imagen
        this.y += this.vy;

        if(this.y <= -this.h){
            this.y = 0;
        }
    }
}



