var game = {
  pacGumActive: false,
  width: 570,
  height: 630,
  perdu: false,
  score: 0,
  gateOpen: false,
  gateTimeoutID: 0,
};
const tileSize = game.height / map.length;

$(document).ready(function () {
  game.element = document.getElementById("myCanvas");
  game.ctx = game.element.getContext("2d");
  initGame();
});

function initGame() {
  player = new Player(9, 11);
  enemies = [];
  enemies.push(new Enemy(9, 9, "pink"), new Enemy(8, 9, "blue"), new Enemy(10, 9, "orange"), new Enemy(9, 7, "red"));
  update(map);
  game.gateTimeoutID = setTimeout(openGate, 1000);
}

function update() {
  game.ctx.clearRect(0, 0, game.width, game.height);
  mapUpdate(map);
  player.draw();
  Input.update();
  player.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    enemies[i].update();
  }
  engine = requestAnimationFrame(update);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function openGate() {
  game.gateOpen = true;
  if (game.gateOpen) {
    map[9][11] = 5;
    map[10][9] = 5;
    map[8][9] = 5;
    map[9][7] = 5;
  }
  game.gateOpen = false;
}
