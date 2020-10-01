function mapUpdate(map) {

	for (px = 0; px < map.length; px++) {
		for (py = 0; py < map.length; py++) {
			drawMap(map[py][px])
		}
	}
}

function drawMap (tile) {
	if (tile == 1) {
				canvas.ctx.fillStyle = "blue"
				canvas.ctx.fillRect(px* tileSize, py * tileSize, tileSize, tileSize); }
	if (tile == 0) {
		canvas.ctx.beginPath();
		canvas.ctx.fillStyle = "white"
		canvas.ctx.arc(px * tileSize + (tileSize/2) , py * tileSize + (tileSize/2), 2, 0, 360);
		canvas.ctx.fill();
	}
	if (tile == 2) {
		canvas.ctx.beginPath();
		canvas.ctx.fillStyle = "white"
		canvas.ctx.arc(px * tileSize + (tileSize/2) , py * tileSize + (tileSize/2), 5, 0, 360);
		canvas.ctx.fill();
	}
}


map =[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,2,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,2,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
			[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
			[1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
			[9,9,9,1,0,1,0,0,0,0,0,0,0,1,0,1,9,9,9],
			[1,1,1,1,0,1,0,1,1,9,1,1,0,1,0,1,1,1,1],
			[0,0,0,0,0,0,0,1,9,9,9,1,0,0,0,0,0,0,0],
			[1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
			[9,9,9,1,0,1,0,0,0,0,0,0,0,1,0,1,9,9,9],
			[1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
			[1,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,2,1],
			[1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
			[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
			[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];