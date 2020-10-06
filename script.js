var canvas = {
  trap: 4,
  pacGumActive: false,
  width: 570,
  height: 630,
  perdu: false,
  score: 0,
	savedMap: [],
};
const tileSize = canvas.height / map.length;

$(document).ready(function () {
  canvas.element = document.getElementById("myCanvas");
  canvas.ctx = canvas.element.getContext("2d");
  game();
	canvas.savedMap = map
});

function game() {
	if (canvas.savedMap.length > 0) map = canvas.savedMap;
	player = new Player(9, 11);
  enemies = [];
  enemies.push(new Enemy(9, 9, "pink"),new Enemy(8, 9, "blue"), new Enemy(10, 9, "orange"), new Enemy(9, 7, "red")); 
	update();
	setTimeout(openGate, 1000)

}

function update() {
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  mapUpdate(map);
  player.draw();
  Input.update();
  player.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    enemies[i].update();
  }
  requestAnimationFrame(update);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function openGate () {
	map[9][11] = 5
	map[10][9] = 5
	map[8][9] = 5
	map[9][7] = 5

	console.log("change")
} 
