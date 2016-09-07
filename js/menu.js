var Menu= {
    preload: function(){
        game.load.image("menu","./images/menu.png");
    },

    create: function(){
        game.backgroundColor = '#061f27';
        this.add.button(game.world.centerX, game.world.centerY,"menu", this.startGame, this); 
        game.scale.fullScreenScaleMode= Phaser.ScaleManager.EXACT_FIT;

    },

    startGame: function(){
        game.scale.startFullScreen(true,true);
        this.state.start("Game");

    }
};
