var canvas = {
  trap: 4,
  pacGumActive: false,
  width: 600,
  height: 600,
  perdu: false,
  score: 0,
};
const tileSize = canvas.width / map.length;

$(document).ready(function () {
  canvas.element = document.getElementById("myCanvas");
  canvas.ctx = canvas.element.getContext("2d");
  player = new Player(9, 11);
  enemies = [];
  enemies.push(new Enemy(9, 9, "pink")); //,new Enemy(8,9,"blue"), new Enemy(10,9,"orange"), new Enemy(9,7,"red"))

  update();
});
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
