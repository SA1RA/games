// State: Flappy.Play

Flappy.Play = function () {
  this.player = null;
};

Flappy.play.prototype = {

  init: function () {
    this.game.renderer.renderSession.roundPixels = true;
    this.Physics.startSystem(Phaser.Physics.ARCADE);
  },

  preload: function () {
    this.load.image("background","assests/backgrund.png");
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-100,0);
  },

  update: function () {
  }

};

game.state.add('Play',Flappy.Play);
