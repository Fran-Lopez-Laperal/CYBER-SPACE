class Healthbar {
    constructor(ctx, x, y, w, h, maxHealth, color){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;

        

        
        
    };


    draw() {

        this.lineWidth = 5;
        this.ctx.strokeStyle = "#333";
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.strokeRect(this.x, this.y, this.w, this.h)
    }
    
    updateHealth() {
        
    }

}


