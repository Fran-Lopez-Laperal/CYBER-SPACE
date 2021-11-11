class Game {
    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 484;
        this.canvas.height = 498;
        this.ctx = this.canvas.getContext('2d');

        this.drawIntervalId = undefined;
        this.fps = 1000 / 60;
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx, this.canvas.witdth / 2, this.canvas.height / 2);
        this.evils = new Evils = [];
        
    }


    start() {
        if(!this.drawIntervalId){
            this.drawIntervalId = setInterval(() => {
                this.clear();
                this.move();
                this.draw();
                 
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

    };




};