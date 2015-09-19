'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var backround;
var ship;

function preload() {
  game.load.image("backround","assets/backround.gif");
  game.load.image("ship","assets/ship.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"backround");
  background.autoScroll(-100,0);
  ship = game.add.sprite(10,284,"ship");
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  flappy.body.gravity.y = 1000;
}

function update() {
}

function render() {
}

