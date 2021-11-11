window.addEventListener('load',() => {
    const game = new Game("cyber-space");
    game.start();
    
    
    document.addEventListener('keydown',(event)=> game.onKeyDown(event.keyCode));

    document.addEventListener('keyup',(event)=>  game.onKeyUp(event.keyCode));

});


