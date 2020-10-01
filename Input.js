var Input = {
    keys: Array(),
    J1_KEY_UP: '90',
    J1_KEY_DOWN: '83',
    J1_KEY_LEFT: '81',
    J1_KEY_RIGHT: '68',
		derniereTouche: null,

    update: function () {
      
			      if (this.keys[this.J1_KEY_LEFT]) {
								this.derniereTouche = "q"
            }
            if (this.keys[this.J1_KEY_RIGHT]) {
								this.derniereTouche = "d"
            }
            if (this.keys[this.J1_KEY_UP]) {
								this.derniereTouche = "z"
            }
            if (this.keys[this.J1_KEY_DOWN]) {
								this.derniereTouche = "s"
            }
						let sauvegardeX = player.px;
						let sauvegardeY = player.py;
				
				if (this.derniereTouche == "z") player.py -= 0.1;
				if (this.derniereTouche == "q") player.px -= 0.1;
				if (this.derniereTouche == "s") player.py += 0.1;
				if (this.derniereTouche == "d") {player.px += 0.1;}


            var tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(player.px)];
						
						var 	tileSiMovementY = map[Math.floor(player.py)][Math.floor(sauvegardeX)];


						if (this.derniereTouche == "d") {
            	tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(player.px + 0.9)];
						}

						if (this.derniereTouche == "s") {
						var tileSiMovementY = map[Math.floor(player.py + 0.9)][Math.floor(sauvegardeX)];
						}

            if (tileSiMovementY == 1 ) {
                player.py = sauvegardeY
            }
						
            if (tileSiMovementX == 1) {
							
                player.px = sauvegardeX;
							
            }

						if (player.px < 0) player.px = map.length
						if (player.px > map.length) player.px = 0
						
						
        
				}
};

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    Input.keys[e.keyCode] = true;
}
function keyUpHandler(e) {
    Input.keys[e.keyCode] = false;
}