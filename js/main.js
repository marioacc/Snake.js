
var game;

//New game instance
game= new Phaser.Game("100%","100%", Phaser.AUTO, "");
// game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

game.state.add("Game", Game);
game.state.add("Menu", Menu);
game.state.add("Game_Over", Game_Over);
// game.scale.startFullScreen(true);
game.state.start("Menu");
