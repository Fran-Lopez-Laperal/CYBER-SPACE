class Game {
    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 484;
        this.canvas.height = 498;
        this.ctx = this.canvas.getContext('2d');
        this.tick = 0;
        this.drawIntervalId = undefined;
        this.fps = 1000 / 60;
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, this.canvas.witdth / 2, this.canvas.height / 2);
        this.evils = [];
        this.icons = [];
        
    }


    start() {
        if(!this.drawIntervalId){
            this.drawIntervalId = setInterval(() => {
                this.tick++;
                this.clear();
                this.move();
                this.draw();


               
        
                
              
                
                if (this.tick % 150 === 0){
                    const randomX = Math.random() * (this.ctx.canvas.width - 100);
                    const evil = new Evil(this.ctx, randomX);
                    this.evils.push(evil);
                    //console.log("is there any evil", this.evils)
                }



                if (this.tick % 100 === 0){
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
    };

    
    end() {
    };

    
    move() {
        this.player.move();

        this.evils.forEach(evil => {
            evil.move()
        });


        this.icons.forEach(icon =>{
            icon.move()
        });

    };


    clear() {
        //this.ctx.clearRect(0, 0, this.canvas.witdth, this.canvas.height)
    };

    
    
    addEvils() {
    };

    onKeyDown(code){
        this.player.onKeyDown(code);
    }

    onKeyUp(code){
        this.player.onKeyUp(code);
    }
    

    checkScore() {
    };

    draw() {
        this.background.draw();
        this.player.draw();

        this.evils.forEach(evil =>{
            evil.draw()
        });
        
        this.icons.forEach(icon =>{
            icon.draw()
        });

        

    };




};