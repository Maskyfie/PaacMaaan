function mapUpdate(map) {
  for (py = 0; py < 31; py++) {
    for (px = 0; px < 28; px++) {
      drawMap(map[py][px]);
    }
  }
}
newMap();

function drawMap(tile) {
  if (tile == 1) {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.fillRect(px * tileSize, py * tileSize, tileSize, tileSize);
  }
  if (tile == 0) {
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = "white";
    canvas.ctx.arc(px * tileSize + tileSize / 2, py * tileSize + tileSize / 2, 2, 0, 360);
    canvas.ctx.fill();
  }
  if (tile == 2) {
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = "white";
    canvas.ctx.arc(px * tileSize + tileSize / 2, py * tileSize + tileSize / 2, 5, 0, 360);
    canvas.ctx.fill();
  }
}
function countThePoints() {
  canvas.points = 0;
  for (px = 0; px < map.length; px++) {
    for (py = 0; py < map.length; py++) {
      if (map[px][py] == 0) canvas.points++;
    }
  }
}

// MAP RANDOM PAS FONCTIONNEL, LA GALERE
function initNewMap() {
  mapRandom = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  newMapRandom();
}
function newMapRandom() {
  for (let py = 0; py < 21; py++) {
    for (let px = 0; px < 19; px++) {
      px == 18 || py == 20;
      if (px == 0 || py == 0 || px == 18 || py == 20) {
        mapRandom[py][px] = 1;
      } else {
        if (px == 0 && py == 0) mapRandom[py + 1][px + 1] = 5;

        let tileOn = mapRandom[py][px];
        let tileLeft = mapRandom[py][px - 1];
        let tileTopLeft = mapRandom[py - 1][px - 1];
        let tileTop = mapRandom[py - 1][px];
        let tileTopRight = mapRandom[py - 1][px + 1];
        let tileRight = mapRandom[py][px + 1];
        let tileDownRight = mapRandom[py + 1][px + 1];
        let tileDown = mapRandom[py + 1][px];
        let tileDownLeft = mapRandom[py + 1][px - 1];

        if (
          tileLeft == 1 &&
          tileTopLeft == 1 &&
          tileTop == 1 &&
          tileTopRight == 1 &&
          tileRight == 1 &&
          tileDownRight == 1 &&
          tileDown == 1 &&
          tileDownLeft == 1
        ) {
          transformATile(py, px);
        }
        if (tileLeft == 1 && tileTop == 1 && tileRight == 1 && tileDown == 1) {
          transformATile(py, px);
        }
        if (tileLeft == 0 || tileTop == 0) {
          let luck = getRandomInt(2);
          if (luck == 0) mapRandom[py][px] = 0;
        }
        if (
          (tileLeft == 0 && tileOn == 0 && tileTopLeft == 0 && tileTop == 0) ||
          (tileLeft == 1 && tileOn == 1 && tileTopLeft == 1 && tileTop == 1)
        ) {
          let luck = getRandomInt(4);
          let whichTile = getRandomInt(2);
          if (luck == 0) mapRandom[py][px - 1] = whichTile;
          if (luck == 1) mapRandom[py][px] = whichTile;
          if (luck == 2) mapRandom[py - 1][px - 1] = whichTile;
          if (luck == 3) mapRandom[py - 1][px] = whichTile;
          px = px - 1;
          py = py - 1;
        }
      }
    }
  }
}

function transformATile(py, px) {
  sideID = getRandomInt(4);
  if (sideID == 0) {
    //left
    mapRandom[py][px - 1] = 0;
  }

  if (sideID == 1) {
    //right
    mapRandom[py][px + 1] = 0;
  }

  if (sideID == 2) {
    //top
    mapRandom[py - 1][px] = 0;
  }

  if (sideID == 3) {
    //down
    mapRandom[py + 1][px] = 0;
  }
  /*if (sideID == 4) {
		//topLeft
		mapRandom[py - 1][px - 1] = 0
	}
	if (sideID == 5) {
		//topRight
		mapRandom[py - 1][px + 1] = 0
	}
	if (sideID == 6) {
		//downLeft
		mapRandom[py + 1][px - 1] = 0
	}
	if (sideID == 7) {
		//downRight
		mapRandom[py + 1][px + 1] = 0
	}
	if (sideID == 8) {
		//downRight
		mapRandom[py][px] = 0
	}*/
}

// AAAAAAAH

function newMap() {
  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 9, 9, 9, 9, 9, 9, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1, 1, 1, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 9, 9, 9, 9, 9, 9, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 5, 5, 5, 5, 5],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  return map;
}
