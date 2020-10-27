class Player {
  constructor(px, py) {
    this.px = px;
    this.py = py;
    this.direction = {};
    this.currentTimeoutID = 0;
    this.tileSize = tileSize * 0.9;
  }
  draw() {
    canvas.ctx.fillStyle = "yellow";
    if (canvas.pacGumActive) canvas.ctx.fillStyle = "red";

    canvas.ctx.fillRect(this.px * tileSize, this.py * tileSize, this.tileSize, this.tileSize);
  }
  update() {
    if (canvas.life == 0) {
      map = newMap();
      canvas.gameStarted = false;
      canvas.score = 0;
      canvas.life = 3;
      canvas.gameStarted = false;
      canvas.points = 0;
      canvas.level = 0;
      clearTimeout(canvas.gateTimeoutID);
      Input.derniereTouche = null;
      initGame();
      cancelAnimationFrame(engine);
    }
    let currentTile = map[Math.floor(this.py)][Math.floor(this.px)];

    // gum standard
    if (currentTile == 0) {
      canvas.score = canvas.score + 16;
      canvas.points--;
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }

    // pacGum
    if (currentTile == 2) {
      canvas.pacGumActive = true;

      // on reset timeout si jamais un déjà en cours
      clearTimeout(this.currentTimeoutID);
      this.currentTimeoutID = setTimeout(function () {
        canvas.pacGumActive = false;
      }, 5000);
      map[Math.floor(this.py)][Math.floor(this.px)] = 5;
    }

    if (this.px < 0) this.px = 28;
    if (this.px > 28) this.px = 0;
    if (canvas.points == 0 && canvas.gameStarted) {
      map = newMap();
      for (let i = 0; i < 4; i++) {
        enemies[i].speed = enemies[i].speed * 1.4;
      }
      canvas.gameWon = true;
      canvas.gameStarted = false;
      canvas.level++;
      canvas.life = 3;
      canvas.points = 0;
      canvas.gameStarted = false;
      clearTimeout(canvas.gateTimeoutID);
      Input.derniereTouche = null;
      initGame();
      cancelAnimationFrame(engine);
    }
  }
}
//TEST
