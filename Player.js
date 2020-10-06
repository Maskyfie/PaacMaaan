class Player {
  constructor(px, py) {
    this.px = px;
    this.py = py;
    this.direction = {};
  }
  draw() {
    canvas.ctx.fillStyle = "yellow";
    if (canvas.pacGumActive) canvas.ctx.fillStyle = "red";

    canvas.ctx.fillRect(this.px * tileSize, this.py * tileSize, tileSize, tileSize);
  }
  update() {
    if (map[Math.floor(this.py)][Math.floor(this.px)] == 0) {
      canvas.score++;
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }
    if (map[Math.floor(this.py)][Math.floor(this.px)] == 2) {
      canvas.pacGumActive = true;
      for (let i = 0; i < enemies.length; i++) enemies[i].pacGum();
      setTimeout(function () {
        canvas.pacGumActive = false;
      }, 5000);
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }

    if (this.px < 0) this.px = 18;
    if (this.px > 18) this.px = 0;
  }
}
//TEST
