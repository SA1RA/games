'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var ship;
var bullets;
var jumpTimer = 0

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.spritesheet("background","background.png",320,568);
  game.load.image("ship","ship.png");
  game.load.image("bullets","bullets.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"background");
  //background.autoScroll(-100,0);
  bullets = game.add.sprite(320, 248,"bullets");
  game.physics.enable(bullets, Phaser.Physics.ARCADE);
  ship = game.add.sprite(10,284,"ship");
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  ship.body.gravity.y = 100;
  ship.body.collideWorldBounds = true;
  bullets.body.velocity.x = -1000;
  ship.scale.set(2);
  ship.smoothed = false;
  background.animations.add('bganim', 10, true);
  background.play('bganim');
}

function update() {
  if (bullets.x < -50) {
      var bullety = game.rnd.integerInrange(25,500);
      console.log(bullety)
      bullets.x = 400;
      bullets.y + 15;
  }

  if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
  ship.body.velocity.y = -100;
  jumpTimer = game.time.now + 750;
  }
}

function render() {
}
