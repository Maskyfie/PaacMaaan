var canvas = {
  pacGumActive: false,
  width: 672,
  height: 744,
  perdu: false,
  score: 0,
  gateOpen: false,
  gateTimeoutID: 0,
  points: 0,
  gameStarted: false,
  life: 3,
  gameWon: false,
  level: 0,
};
const tileSize = canvas.height / map.length;
var engine;
$(document).ready(function () {
  canvas.element = document.getElementById("myCanvas");
  canvas.ctx = canvas.element.getContext("2d");
  initGame();
});

function initGame() {
  countThePoints();
  player = new Player(15, 22);
  enemies = [];
  enemies.push(new Enemy(13, 13, "pink"), new Enemy(13, 15, "blue"), new Enemy(14, 15, "orange"), new Enemy(14, 13, "red"));
  initNewMap();
  update(map);
  console.log(mapRandom);
  canvas.gateTimeoutID = setTimeout(openGate, 3000);
  canvas.gameWon = false;
}

function update() {
  document.getElementById("valScore").innerHTML = canvas.score;
  document.getElementById("valLife").innerHTML = canvas.life;
  document.getElementById("valLevel").innerHTML = canvas.level;
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  mapUpdate(map);
  player.draw();
  Input.update();
  player.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    if (canvas.gameStarted) {
      enemies[i].update();
    }
  }
  engine = requestAnimationFrame(update);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function closeGate() {
  canvas.gateOpen = false;
  map[12][13] = 1;
  map[12][14] = 1;
  map[16][13] = 1;
  map[16][14] = 1;
  map[14][10] = 1;
  map[14][17] = 1;
}
function openGate() {
  canvas.gateOpen = true;
  if (canvas.gateOpen) {
    map[12][13] = 5;
    map[12][14] = 5;
    map[16][13] = 5;
    map[16][14] = 5;
    map[14][10] = 5;
    map[14][17] = 5;
  }

  canvas.gateOpen = false;
}
