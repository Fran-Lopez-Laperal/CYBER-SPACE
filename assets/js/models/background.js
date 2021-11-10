class Background  {
    constructor (ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 434;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.img = new Image();
        this.img.src = 'assets/img/background.png';
        this.img.width = this.width;
        this.img.height = this.height;
        
    }
    

    draw () {
        //Añadir parametros para pintar la imagen.
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
        }
        
        
        move() {
        // Añadir parámetros para mover la imagen
        }
}



