function Game(){

}

Game.prototype.init = function(){
    this.gameWorld = new GameWorld();
}

Game.prototype.start = function(){
    poolGame.init();
    poolGame.mainLoop();
}

Game.prototype.mainLoop = function(){
    Canvas.clear();
    poolGame.gameWorld.update();
    poolGame.gameWorld.draw();
    requestAnimationFrame(poolGame.mainLoop);
}

let poolGame = new Game();