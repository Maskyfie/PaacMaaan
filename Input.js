var Input = {
  keys: Array(),
  J1_KEY_Z: "90",
  J1_KEY_S: "83",
  J1_KEY_Q: "81",
  J1_KEY_D: "68",
	J1_KEY_UP: "38",
  J1_KEY_DOWN: "40",
  J1_KEY_LEFT: "37",
  J1_KEY_RIGHT: "39",
  nextTouche: null,
	touchePressed: null,

  update: function () {
    if (this.keys[this.J1_KEY_LEFT] || this.keys[this.J1_KEY_Q]) {
			//azthis.touchePressed = "q"
      this.nextTouche = "q";
    }
    if (this.keys[this.J1_KEY_RIGHT] || this.keys[this.J1_KEY_D]) {
			//this.touchePressed = "d"
      this.nextTouche = "d";
    }
    if (this.keys[this.J1_KEY_UP] || this.keys[this.J1_KEY_Z]) {
			//this.touchePressed = "z"
      this.nextTouche = "z";
    }
    if (this.keys[this.J1_KEY_DOWN] || this.keys[this.J1_KEY_S]) {
			//this.touchePressed = "s"
      this.nextTouche = "s";
    }
    let sauvegardeX = player.px;
    let sauvegardeY = player.py;

    if (this.nextTouche == "z") {
      //player.py -= 0.1;
      player.direction = { x: 0, y: -1 };
			canvas.gameStarted = true
    }
    if (this.nextTouche == "q") {
      //player.px -= 0.1;
      player.direction = { x: -1, y: 0 };
			canvas.gameStarted = true
    }
    if (this.nextTouche == "s") {
      //player.py += 0.1;
      player.direction = { x: 0, y: 1 };
			canvas.gameStarted = true
    }
    if (this.nextTouche == "d") {
      //player.px += 0.1;
      player.direction = { x: 1, y: 0 };
			canvas.gameStarted = true
    }
		var offset = 0 ;
		if (this.touchePressed == "z") offset = 0.9;
		if (this.touchePressed == "q") offset = 0.9;
		if (this.touchePressed == "s") offset = 0;
		if (this.touchePressed == "d") offset = 0;
		 

		if (this.nextTouche == "q") {
			var nextTileMouvementX = map[Math.floor(player.py + offset)][Math.floor(player.px - 1)]	
		}

		if ( this.nextTouche == "d") {
			var nextTileMouvementX = map[Math.floor(player.py + offset)][Math.floor(player.px + 1)]
		}

		if (this.nextTouche == "z") {
			console.log(offset)
			var nextTileMouvementY = map[Math.floor(player.py - 1)][Math.floor(player.px + offset)]
		}

		if (this.nextTouche == "s") {
			var nextTileMouvementY = map[Math.floor(player.py + 1)][Math.floor(player.px + offset)]
		}


		if (nextTileMouvementX == 0 || nextTileMouvementX == 2 || nextTileMouvementX == 5 || nextTileMouvementX == 9) {
			this.touchePressed = this.nextTouche
		}

		if (nextTileMouvementY == 0 || nextTileMouvementY == 2 || nextTileMouvementY == 5 || nextTileMouvementY == 9) {
			this.touchePressed = this.nextTouche
		}

		if (this.touchePressed == "q") {
			player.px -= 0.1
		}
		if (this.touchePressed == "d") {
			player.px += 0.1
		}
		if (this.touchePressed == "z") {
			player.py -= 0.1
		}
		if (this.touchePressed == "s") {
			player.py += 0.1
		}
		var tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(player.px)];

    var tileSiMovementY = map[Math.floor(player.py)][Math.floor(sauvegardeX)];

    if (this.touchePressed == "d") {
      tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(player.px + 0.9)];
    }

    if (this.touchePressed == "s") {
      var tileSiMovementY = map[Math.floor(player.py + 0.9)][Math.floor(sauvegardeX)];
    } //TEST

    if (tileSiMovementY == 1) {
      player.py = sauvegardeY;
    }

    if (tileSiMovementX == 1) {
      player.px = sauvegardeX;
    }
  },
};

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  Input.keys[e.keyCode] = true;
}
function keyUpHandler(e) {
  Input.keys[e.keyCode] = false;
}
