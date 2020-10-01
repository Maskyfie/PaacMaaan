class Player {
  constructor(px, py) {
    this.px = px;
    this.py = py;
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
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }
  }
}
