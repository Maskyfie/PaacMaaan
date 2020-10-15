var canvas = {
  pacGumActive: false,
  width: 684,
  height: 756,
  perdu: false,
  score: 0,
  gateOpen: false,
  gateTimeoutID: 0,
	points: 0,
	gameStarted: false,
	life : 3,
	gameWon: false,
	level: 1,
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
  player = new Player(9, 11);
  enemies = [];
  enemies.push(new Enemy(9, 9, "pink"), new Enemy(8, 9, "blue"), new Enemy(10, 9, "orange"), new Enemy(9, 7, "red"));
  initNewMap()
  update(map);
	console.log(mapRandom)
  canvas.gateTimeoutID = setTimeout(openGate, 3000);
	canvas.gameWon = false
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
    if (canvas.gameStarted) {enemies[i].update();}
  }
	engine = requestAnimationFrame(update);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function closeGate() {
	  canvas.gateOpen = false;
    map[9][11] = 1;
    map[10][9] = 1;
    map[8][9] = 1;
    map[9][7] = 1;	
}
function openGate() {
  canvas.gateOpen = true;
  if (canvas.gateOpen) {
    map[9][11] = 5;
    map[10][9] = 5;
    map[8][9] = 5;
    map[9][7] = 5;
  }
  canvas.gateOpen = false;
}
