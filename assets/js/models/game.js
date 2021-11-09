class Game {
    constructor () {
        this.canvas = document.getElementById(canvasId)
        this.canvas.witdth = 400;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');
        this.background = new Background(this.ctx);
    }


    start() {
    };


    restart() {
    };

    
    stop(){    
    };

    
    end() {
    };

    
    move() {
    };


    clear() {
    };

    
    
    addEvils() {
    };


    

    checkScore() {
    };

    draw() {
        this.background.draw()

    };




};