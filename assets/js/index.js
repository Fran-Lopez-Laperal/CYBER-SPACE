window.addEventListener("load", () => {
  const game = new Game("cyber-space");
  game.onGameOver = () => {
    console.log("gameOver");
  };
  
  
  document.getElementById("start-btn").addEventListener("click", () =>{
    game.start();
  document.getElementById("start-btn").parentNode.parentNode.parentNode.remove()
  });
  //KEYS MOVEMENTS
  document.addEventListener("keydown", (event) =>
    game.onKeyDown(event.keyCode)
  );

  document.addEventListener("keyup", (event) => game.onKeyUp(event.keyCode));

  //KEYS SHOOTING
  document.addEventListener("keyshoot", (event) =>
    game.shootingUP(event.keyCode)
  );

  // const startBtn = document.querySelector(".start-button");
  // startBtn.addEventListener('click', game.start())
});
