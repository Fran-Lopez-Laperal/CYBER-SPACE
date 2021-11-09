class Game {
    constructor (canvasGame) {
        this.canvas = document.getElementById(canvasGame)
        this.canvas.witdth = 400;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');

        this.drawIntervalId = undefined;
        this.fps = 1000 / 60.
        this.background = new Background(this.ctx);
    }


    start() {
        if(!this.drawIntervalId){
            this.drawIntervalId = setInterval(() => {
                this.clear();
                this.draw();
                this.move()
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
    };


    clear() {
        this.canvas.clearRect(0, 0, this.canvas.witdth, this.canvas.height)
    };

    
    
    addEvils() {
    };


    

    checkScore() {
    };

    draw() {
        this.background.draw()

    };




};