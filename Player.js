class Player {
  constructor(px, py) {
    this.px = px;
    this.py = py;
    this.direction = {};
    this.currentTimeoutID = 0;
  }
  draw() {
    game.ctx.fillStyle = "yellow";
    if (game.pacGumActive) game.ctx.fillStyle = "red";

    game.ctx.fillRect(this.px * tileSize, this.py * tileSize, tileSize, tileSize);
  }
  update() {
    let currentTile = map[Math.floor(this.py)][Math.floor(this.px)];

    // gum standard
    if (currentTile == 0) {
      game.score++;
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }

    // pacGum
    if (currentTile == 2) {
      game.pacGumActive = true;

      // on reset timeout si jamais un déjà en cours
      clearTimeout(this.currentTimeoutID);
      this.currentTimeoutID = setTimeout(function () {
        game.pacGumActive = false;
      }, 5000);
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }

    if (this.px < 0) this.px = 18;
    if (this.px > 18) this.px = 0;
  }
}
//TEST
