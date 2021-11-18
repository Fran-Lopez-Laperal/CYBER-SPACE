window.addEventListener("load", () => {
  const game = new Game("cyber-space");
  game.start();
  game.onGameOver = () =>{
    console.log("gameOver")
  }
  //KEYS MOVEMENTS
  document.addEventListener("keydown", (event) =>
    game.onKeyDown(event.keyCode)
  );

  document.addEventListener("keyup", (event) => game.onKeyUp(event.keyCode));

  //KEYS SHOOTING
  document.addEventListener("keyshoot", (event) =>
    game.shootingUP(event.keyCode)
  );
});
