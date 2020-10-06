class Enemy {
  constructor(px, py, color) {
    this.px = px;
    this.py = py;
    this.color = color;
    this.pacGommedColor = "#00008B";
    this.direction = this.getDirection();
    this.goingTop = false;
    this.goingLeft = false;
    this.goingRight = false;
    this.goingDown = false;
    this.newTile = true;
    this.nextTile = {};
    this.speed = 0.1;
  }
  draw() {
    canvas.ctx.beginPath();
    if (canvas.pacGumActive) {
      canvas.ctx.fillStyle = this.pacGommedColor;
    } else {
      canvas.ctx.fillStyle = this.color;
    }
    canvas.ctx.arc(this.px * tileSize + tileSize / 2, this.py * tileSize + tileSize / 2, tileSize / 2, 0, 360);
    canvas.ctx.fill();
  }
  update() {
    let sauvegardeX = this.px;
    let sauvegardeY = this.py;

    let offset = 0.9;

    this.px = this.px + this.speed * this.direction.x;
    this.py = this.py + this.speed * this.direction.y;

    var tileSiMovementX;
    var tileSiMovementY; //TEST

    if (this.direction.x == 1) {
      this.goingLeft = false;
      this.goingRight = true;
      this.goingDown = false;
      this.goingTop = false;
      offset = offset * 0;
    }
    if (this.direction.x == -1) {
      this.goingLeft = true;
      this.goingRight = false;
      this.goingDown = false;
      this.goingTop = false;
      offset = offset * 1;
    }

    if (this.direction.y == -1) {
      this.goingLeft = false;
      this.goingRight = false;
      this.goingDown = false;
      this.goingTop = true;
      offset = offset * 1;
    }
    if (this.direction.y == 1) {
      this.goingLeft = false;
      this.goingRight = false;
      this.goingDown = true;
      this.goingTop = false;
      offset = offset * 0;
    }

    if (this.direction.x > 0) tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(this.px + 0.9)];
    else tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(this.px)];

    if (this.direction.y > 0) tileSiMovementY = map[Math.floor(this.py + 0.9)][Math.floor(sauvegardeX)];
    else tileSiMovementY = map[Math.floor(this.py)][Math.floor(sauvegardeX)];

    if (this.newTile) {
      this.nextTile = { x: this.px + this.direction.x, y: this.py + this.direction.y };
      this.newTile = false;
    }
    if (
      Math.floor(this.nextTile.x) == Math.floor(this.px + offset) &&
      Math.floor(this.nextTile.y) == Math.floor(this.py + offset) &&
      Math.floor(this.px + offset) != 0 &&
      Math.round(this.px + offset) != map.length
    ) {
      this.newTile = true;
      this.direction = this.getDirection();
    }

    if (tileSiMovementY == 1) {
      this.py = sauvegardeY;
      this.direction = this.getDirection();
      this.nextTile = { x: this.px + this.direction.x, y: this.py + this.direction.y };
    }
    if (tileSiMovementX == 1) {
      this.px = sauvegardeX;
      this.direction = this.getDirection();
      this.nextTile = { x: this.px + this.direction.x, y: this.py + this.direction.y };
    }

    if (this.px < 0) {
      this.px = 18;
      this.py = 9;
      this.newTile = true;
    }

    if (this.px > 18) {
      this.px = 0;
      this.py = 9;
      this.newTile = true;
    }
    this.killPacMan();
  }

  getDirection() {
    let px = Math.floor(this.px);
    let py = Math.floor(this.py);
    let possDeDepl = [];

    if (!this.goingRight) {
      if (map[py][px - 1] != 1) possDeDepl.push({ x: -1, y: 0 });
    }

    if (!this.goingDown) {
      if (map[py - 1][px] != 1) possDeDepl.push({ x: 0, y: -1 });
    }

    if (!this.goingTop) {
      if (map[py + 1][px] != 1) possDeDepl.push({ x: 0, y: 1 });
    }

    if (!this.goingLeft) {
      if (map[py][px + 1] != 1) possDeDepl.push({ x: 1, y: 0 });
    }

    if (canvas.pacGumActive) {
      if (player.px > this.px) {
        if (map[py][px - 1] != 1) possDeDepl.push({ x: -1, y: 0 });
      }

      if (player.py > this.py) {
        if (map[py - 1][px] != 1) possDeDepl.push({ x: 0, y: -1 });
      }

      if (player.py < this.py) {
        if (map[py + 1][px] != 1) possDeDepl.push({ x: 0, y: 1 });
      }

      if (player.px < this.px) {
        if (map[py][px + 1] != 1) possDeDepl.push({ x: 1, y: 0 });
      }
    }
    if (possDeDepl.length == 0 && this.goingLeft) {
      if (map[py][px + 1] != 1) possDeDepl.push({ x: 1, y: 0 });
    }
    if (possDeDepl.length == 0 && this.goingRight) {
      if (map[py][px - 1] != 1) possDeDepl.push({ x: -1, y: 0 });
    }
    if (possDeDepl.length == 0 && this.goingTop) {
      if (map[py + 1][px] != 1) possDeDepl.push({ x: 0, y: 1 });
    }
    if (possDeDepl.length == 0 && this.goingDown) {
      if (map[py - 1][px] != 1) possDeDepl.push({ x: 0, y: -1 });
    }
    if (possDeDepl.length > 0) return possDeDepl[getRandomInt(possDeDepl.length)];
  }
  pacGum() {
    if (canvas.pacGumActive == false) {
      this.speed = 0.1;
      return;
    }
    let px = Math.floor(this.px);
    let py = Math.floor(this.py);
    let possDeDepl = [];

    if (player.px > this.px) {
      if (map[py][px - 1] != 1) possDeDepl.push({ x: -1, y: 0 });
    }

    if (player.py > this.py) {
      if (map[py - 1][px] != 1) possDeDepl.push({ x: 0, y: -1 });
    }

    if (player.py < this.py) {
      if (map[py + 1][px] != 1) possDeDepl.push({ x: 0, y: 1 });
    }

    if (player.px < this.px) {
      if (map[py][px + 1] != 1) possDeDepl.push({ x: 1, y: 0 });
    }

    this.direction.x = this.direction.x * -1;
    this.direction.y = this.direction.y * -1;
    this.speed = 0.05;
  }
  killPacMan() {
    if (Math.floor(this.px) == Math.floor(player.px) && Math.floor(this.py) == Math.floor(player.py) && !canvas.pacGumActive) {
      this.speed = 0.1;
      map = newMap();
      game();
      cancelAnimationFrame(engine);
    }
  }
}
