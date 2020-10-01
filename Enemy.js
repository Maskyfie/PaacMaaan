class Enemy {
  constructor(px, py, color) {
    this.px = px;
    this.py = py;
    this.color = color;
    this.direction = this.getDirection();
  }
  draw() {
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = this.color;
    canvas.ctx.arc(this.px * tileSize + tileSize / 2, this.py * tileSize + tileSize / 2, tileSize / 2, 0, 360);
    canvas.ctx.fill();
  }
  update() {
    console.log(this.color, this.direction, Math.floor(this.px), Math.floor(this.py));

    let sauvegardeX = this.px;
    let sauvegardeY = this.py;

    this.px += 0.1 * this.direction.x;
    this.py += 0.1 * this.direction.y;

    var tileSiMovementX;
    var tileSiMovementY;

    if (this.direction.x > 0) tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(this.px + 0.9)];
    else tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(this.px)];
    if (this.direction.y > 0) tileSiMovementY = map[Math.floor(this.py + 0.9)][Math.floor(sauvegardeX)];
    else tileSiMovementY = map[Math.floor(this.py)][Math.floor(sauvegardeX)];

    if (tileSiMovementY == 1) {
      this.py = sauvegardeY;
      this.direction = this.getDirection();
    }
    if (tileSiMovementX == 1) {
      this.px = sauvegardeX;
      this.direction = this.getDirection();
    }
    if (this.px < 0) this.px = map.length;
    if (this.px > map.length) this.px = 0;
  }

  getDirection() {
    let px = Math.floor(this.px);
    let py = Math.floor(this.py);
    let possDeDepl = [];
    if (map[py][px - 1] != 1) possDeDepl.push({ x: -1, y: 0 });

    if (map[py - 1][px] != 1) possDeDepl.push({ x: 0, y: -1 });
    if (map[py + 1][px] != 1) possDeDepl.push({ x: 0, y: 1 });

    if (map[py][px + 1] != 1) possDeDepl.push({ x: 1, y: 0 });
    return possDeDepl[getRandomInt(possDeDepl.length)];
  }
}
